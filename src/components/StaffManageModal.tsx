import React, { useState } from 'react';
import { X, Plus, Trash2, Edit2, RotateCcw, Check, AlertCircle, Save, Settings } from 'lucide-react';
import { Department, HospitalConfig } from '../types/hospital';
import { resetHospitalDataToDefaults } from '../data/hospitalData';

interface StaffManageModalProps {
  isOpen: boolean;
  onClose: () => void;
  departments: Department[];
  onSaveDepartments: (deps: Department[]) => void;
  config: HospitalConfig;
  onSaveConfig: (cfg: HospitalConfig) => void;
}

export const StaffManageModal: React.FC<StaffManageModalProps> = ({
  isOpen,
  onClose,
  departments,
  onSaveDepartments,
  config,
  onSaveConfig,
}) => {
  const [activeTab, setActiveTab] = useState<'departments' | 'hospitalInfo'>('departments');
  const [localDepartments, setLocalDepartments] = useState<Department[]>(departments);
  const [localConfig, setLocalConfig] = useState<HospitalConfig>(config);
  
  // New department form state
  const [editingDeptId, setEditingDeptId] = useState<string | null>(null);
  const [deptForm, setDeptForm] = useState({
    name: '',
    category: 'clinical' as 'clinical' | 'surgical' | 'emergency' | 'support',
    description: '',
    commonConditions: '',
    opdTimings: 'Mon - Sat: 10:00 AM - 1:00 PM',
    iconName: 'Stethoscope'
  });

  const [notification, setNotification] = useState<string | null>(null);

  if (!isOpen) return null;

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleEditDept = (dept: Department) => {
    setEditingDeptId(dept.id);
    setDeptForm({
      name: dept.name,
      category: dept.category,
      description: dept.description,
      commonConditions: dept.commonConditions.join(', '),
      opdTimings: dept.opdTimings,
      iconName: dept.iconName
    });
  };

  const handleSaveDeptItem = (e: React.FormEvent) => {
    e.preventDefault();
    if (!deptForm.name.trim()) return;

    const conditionList = deptForm.commonConditions
      .split(',')
      .map(s => s.trim())
      .filter(Boolean);

    if (editingDeptId) {
      // update
      const updated = localDepartments.map(d => {
        if (d.id === editingDeptId) {
          return {
            ...d,
            name: deptForm.name.trim(),
            category: deptForm.category,
            description: deptForm.description.trim(),
            commonConditions: conditionList.length ? conditionList : ['General Consultation'],
            opdTimings: deptForm.opdTimings.trim(),
            iconName: deptForm.iconName
          };
        }
        return d;
      });
      setLocalDepartments(updated);
      onSaveDepartments(updated);
      setEditingDeptId(null);
      showNotification('Department updated successfully');
    } else {
      // create new
      const newDept: Department = {
        id: `dept-${Date.now()}`,
        name: deptForm.name.trim(),
        category: deptForm.category,
        description: deptForm.description.trim() || 'Comprehensive specialist care.',
        commonConditions: conditionList.length ? conditionList : ['Consultation & Care'],
        opdTimings: deptForm.opdTimings.trim(),
        iconName: deptForm.iconName
      };
      const updated = [...localDepartments, newDept];
      setLocalDepartments(updated);
      onSaveDepartments(updated);
      showNotification('New department added successfully');
    }

    // reset form
    setDeptForm({
      name: '',
      category: 'clinical',
      description: '',
      commonConditions: '',
      opdTimings: 'Mon - Sat: 10:00 AM - 1:00 PM',
      iconName: 'Stethoscope'
    });
  };

  const handleDeleteDept = (id: string) => {
    if (confirm('Are you sure you want to remove this department?')) {
      const updated = localDepartments.filter(d => d.id !== id);
      setLocalDepartments(updated);
      onSaveDepartments(updated);
      showNotification('Department removed');
    }
  };

  const handleSaveHospitalConfig = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveConfig(localConfig);
    showNotification('Hospital details updated successfully');
  };

  const handleResetToDefaults = () => {
    if (confirm('Reset all departments and hospital configuration back to initial defaults?')) {
      resetHospitalDataToDefaults();
      window.location.reload();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-400/30 flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Hospital Staff Management Portal
              </h3>
              <p className="text-xs text-slate-400">
                Easily modify departments, specialities, and hospital contact information.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Bar */}
        <div className="px-6 py-3 bg-slate-100/80 border-b border-slate-200 flex items-center justify-between text-xs font-semibold">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('departments')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'departments'
                  ? 'bg-white text-slate-900 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Departments ({localDepartments.length})
            </button>
            <button
              onClick={() => setActiveTab('hospitalInfo')}
              className={`px-4 py-2 rounded-lg transition-colors cursor-pointer ${
                activeTab === 'hospitalInfo'
                  ? 'bg-white text-slate-900 shadow-2xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Hospital Details & Phone
            </button>
          </div>

          <button
            onClick={handleResetToDefaults}
            className="text-xs text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
            title="Reset localStorage back to initial factory data"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>
        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="bg-emerald-50 text-emerald-800 border-b border-emerald-200 px-6 py-2.5 text-xs font-semibold flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-600" />
            <span>{notification}</span>
          </div>
        )}

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'departments' ? (
            <div className="space-y-6">
              {/* Form to Add or Edit Department */}
              <form onSubmit={handleSaveDeptItem} className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900">
                    {editingDeptId ? 'Edit Department' : 'Add New Department / Speciality'}
                  </h4>
                  {editingDeptId && (
                    <button
                      type="button"
                      onClick={() => {
                        setEditingDeptId(null);
                        setDeptForm({
                          name: '',
                          category: 'clinical',
                          description: '',
                          commonConditions: '',
                          opdTimings: 'Mon - Sat: 10:00 AM - 1:00 PM',
                          iconName: 'Stethoscope'
                        });
                      }}
                      className="text-xs text-slate-500 hover:underline cursor-pointer"
                    >
                      Cancel Edit
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Department Name
                    </label>
                    <input
                      type="text"
                      required
                      value={deptForm.name}
                      onChange={(e) => setDeptForm({ ...deptForm, name: e.target.value })}
                      placeholder="e.g. Dermatology & Skin Care"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Category
                    </label>
                    <select
                      value={deptForm.category}
                      onChange={(e) => setDeptForm({ ...deptForm, category: e.target.value as any })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white"
                    >
                      <option value="clinical">Clinical Medicine</option>
                      <option value="surgical">Surgical Speciality</option>
                      <option value="emergency">Emergency / Critical</option>
                      <option value="support">Diagnostic / Support</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Overview Description
                  </label>
                  <textarea
                    rows={2}
                    value={deptForm.description}
                    onChange={(e) => setDeptForm({ ...deptForm, description: e.target.value })}
                    placeholder="Short description of department services and clinical care..."
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Treated Conditions (comma separated)
                    </label>
                    <input
                      type="text"
                      value={deptForm.commonConditions}
                      onChange={(e) => setDeptForm({ ...deptForm, commonConditions: e.target.value })}
                      placeholder="e.g. Acne, Eczema, Psoriasis, Allergies"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      OPD Timings
                    </label>
                    <input
                      type="text"
                      value={deptForm.opdTimings}
                      onChange={(e) => setDeptForm({ ...deptForm, opdTimings: e.target.value })}
                      placeholder="e.g. Mon - Sat: 10:00 AM - 1:00 PM"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 bg-white"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <Save className="w-3.5 h-3.5" />
                    <span>{editingDeptId ? 'Save Changes' : 'Add Department'}</span>
                  </button>
                </div>
              </form>

              {/* Department List */}
              <div className="space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Current Active Departments ({localDepartments.length})
                </h4>
                <div className="divide-y divide-slate-100 border border-slate-200 rounded-xl overflow-hidden">
                  {localDepartments.map((dept) => (
                    <div key={dept.id} className="p-4 bg-white flex items-center justify-between gap-4 hover:bg-slate-50">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">{dept.name}</span>
                          <span className="text-[11px] px-2 py-0.5 rounded bg-slate-100 text-slate-600 capitalize">
                            {dept.category}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1 line-clamp-1">{dept.description}</p>
                        <span className="text-[11px] text-slate-400 mt-0.5 block">{dept.opdTimings}</span>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          type="button"
                          onClick={() => handleEditDept(dept)}
                          className="p-1.5 text-slate-500 hover:text-sky-600 hover:bg-sky-50 rounded-md transition-colors cursor-pointer"
                          title="Edit"
                        >
                          <Edit2 className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteDept(dept.id)}
                          className="p-1.5 text-slate-500 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors cursor-pointer"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Hospital Information Tab */
            <form onSubmit={handleSaveHospitalConfig} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Hospital Name
                </label>
                <input
                  type="text"
                  required
                  value={localConfig.name}
                  onChange={(e) => setLocalConfig({ ...localConfig, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Phone / Helpline
                  </label>
                  <input
                    type="text"
                    required
                    value={localConfig.phone}
                    onChange={(e) => setLocalConfig({ ...localConfig, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 font-mono"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    WhatsApp Number
                  </label>
                  <input
                    type="text"
                    required
                    value={localConfig.whatsappNumber}
                    onChange={(e) => setLocalConfig({ ...localConfig, whatsappNumber: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Address
                </label>
                <textarea
                  rows={2}
                  required
                  value={localConfig.address}
                  onChange={(e) => setLocalConfig({ ...localConfig, address: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Area / Locality
                  </label>
                  <input
                    type="text"
                    value={localConfig.locationArea}
                    onChange={(e) => setLocalConfig({ ...localConfig, locationArea: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    City
                  </label>
                  <input
                    type="text"
                    value={localConfig.city}
                    onChange={(e) => setLocalConfig({ ...localConfig, city: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    value={localConfig.pincode}
                    onChange={(e) => setLocalConfig({ ...localConfig, pincode: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300"
                  />
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs flex items-center gap-2 shadow-xs cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  <span>Update Hospital Details</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
