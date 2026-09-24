import React, { useState } from 'react';
import { 
  Stethoscope, 
  HeartHandshake, 
  Baby, 
  Activity, 
  Scissors, 
  HeartPulse, 
  Ear, 
  ShieldAlert, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  Plus, 
  Edit3, 
  Layers
} from 'lucide-react';
import { Department } from '../types/hospital';

interface DepartmentsProps {
  departments: Department[];
  onSelectDepartmentForBooking: (deptName: string) => void;
  onOpenStaffPortal?: () => void;
}

export const Departments: React.FC<DepartmentsProps> = ({
  departments,
  onSelectDepartmentForBooking,
  onOpenStaffPortal
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Stethoscope': return Stethoscope;
      case 'HeartHandshake': return HeartHandshake;
      case 'Baby': return Baby;
      case 'Activity': return Activity;
      case 'Scissors': return Scissors;
      case 'HeartPulse': return HeartPulse;
      case 'Ear': return Ear;
      case 'ShieldAlert': return ShieldAlert;
      default: return Stethoscope;
    }
  };

  const filtered = activeCategory === 'all'
    ? departments
    : departments.filter(d => d.category === activeCategory);

  return (
    <section id="departments" className="py-16 sm:py-24 bg-slate-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Departments & Specialities
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Multidisciplinary Medical Expertise
            </h2>
            <p className="text-slate-600 text-base">
              Providing holistic diagnosis, medical therapy, and modern surgical treatments across specialized medical disciplines.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {onOpenStaffPortal && (
              <button
                onClick={onOpenStaffPortal}
                className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-lg shadow-2xs transition-colors cursor-pointer"
                title="Hospital staff can add or edit departments"
              >
                <Edit3 className="w-3.5 h-3.5 text-sky-600" />
                <span>Staff: Manage Departments</span>
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs (Zero-Pill interactive segmented control) */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {[
            { id: 'all', label: 'All Departments' },
            { id: 'clinical', label: 'Clinical Medicine' },
            { id: 'surgical', label: 'Surgical & Ortho' },
            { id: 'emergency', label: 'Emergency & Critical' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveCategory(tab.id)}
              className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-sky-600 text-white shadow-xs'
                  : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
          <span className="ml-auto text-xs text-slate-400 font-medium hidden sm:inline">
            Showing {filtered.length} {filtered.length === 1 ? 'speciality' : 'specialities'}
          </span>
        </div>

        {/* Departments Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((dept) => {
            const Icon = getIcon(dept.iconName);
            return (
              <div
                key={dept.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xs hover:border-sky-300 hover:shadow-md transition-all flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center group-hover:bg-sky-600 group-hover:text-white transition-colors duration-200">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold text-slate-400 capitalize">
                      {dept.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                      {dept.name}
                    </h3>
                    <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                      {dept.description}
                    </p>
                  </div>

                  {/* Key Conditions Treated */}
                  <div className="pt-2 space-y-1.5">
                    <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Key Scope & Focus
                    </div>
                    <ul className="space-y-1">
                      {dept.commonConditions.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                          <span className="truncate">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* OPD Timing */}
                  <div className="pt-2 text-[11px] text-slate-500 flex items-center gap-1.5 border-t border-slate-100">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="truncate font-medium">{dept.opdTimings}</span>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-5 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => onSelectDepartmentForBooking(dept.name)}
                    className="w-full py-2 px-3 rounded-lg text-xs font-semibold bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 border border-slate-200 hover:border-sky-200 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5 text-sky-600" />
                    <span>Book in this Dept</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
