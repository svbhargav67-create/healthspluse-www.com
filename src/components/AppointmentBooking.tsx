import React, { useState, useEffect } from 'react';
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone, 
  Mail, 
  Stethoscope, 
  MessageSquare, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Share2, 
  ArrowRight,
  Printer
} from 'lucide-react';
import { Department, Doctor, AppointmentRequest, HospitalConfig } from '../types/hospital';

interface AppointmentBookingProps {
  departments: Department[];
  doctors: Doctor[];
  config: HospitalConfig;
  preselectedDoctor?: string;
  preselectedDepartment?: string;
  onOpenTerms?: (tab: 'terms' | 'privacy') => void;
}

export const AppointmentBooking: React.FC<AppointmentBookingProps> = ({
  departments,
  doctors,
  config,
  preselectedDoctor,
  preselectedDepartment,
  onOpenTerms
}) => {
  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    email: '',
    department: preselectedDepartment || '',
    doctor: preselectedDoctor || '',
    preferredDate: '',
    preferredTime: '10:00 AM - 12:00 PM',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedAppointment, setSubmittedAppointment] = useState<AppointmentRequest | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync props when user clicked on a doctor or department elsewhere
  useEffect(() => {
    if (preselectedDepartment) {
      setFormData(prev => ({ ...prev, department: preselectedDepartment }));
    }
    if (preselectedDoctor) {
      setFormData(prev => ({ ...prev, doctor: preselectedDoctor }));
    }
  }, [preselectedDoctor, preselectedDepartment]);

  // Today's date in YYYY-MM-DD for min date
  const todayStr = new Date().toISOString().split('T')[0];

  // Available doctors filtered by department if selected
  const availableDoctors = formData.department
    ? doctors.filter(d => d.departmentName.toLowerCase().includes(formData.department.toLowerCase()) || d.departmentId === formData.department)
    : doctors;

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.patientName.trim()) {
      newErrors.patientName = 'Please enter patient full name';
    } else if (formData.patientName.trim().length < 2) {
      newErrors.patientName = 'Name must be at least 2 characters';
    }

    const cleanPhone = formData.phoneNumber.replace(/[\s\-+]/g, '');
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required for appointment confirmation';
    } else if (cleanPhone.length < 10) {
      newErrors.phoneNumber = 'Please enter a valid 10-digit mobile number';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required for confirmation receipt';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.department) {
      newErrors.department = 'Please select a medical department';
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Please select your preferred appointment date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API call & generate reference code
    setTimeout(() => {
      const refNumber = `HP-BLR-${Math.floor(100000 + Math.random() * 900000)}`;
      const newAppt: AppointmentRequest = {
        id: `appt-${Date.now()}`,
        referenceNumber: refNumber,
        patientName: formData.patientName.trim(),
        phoneNumber: formData.phoneNumber.trim(),
        email: formData.email.trim(),
        departmentId: formData.department,
        departmentName: formData.department,
        doctorName: formData.doctor || 'Next Available Specialist',
        preferredDate: formData.preferredDate,
        preferredTime: formData.preferredTime,
        message: formData.message.trim(),
        status: 'Confirmed',
        createdAt: new Date().toISOString()
      };

      // Store in localStorage for records
      try {
        const existing = JSON.parse(localStorage.getItem('healthplus_appointments') || '[]');
        existing.unshift(newAppt);
        localStorage.setItem('healthplus_appointments', JSON.stringify(existing));
      } catch (err) {
        console.error(err);
      }

      setIsSubmitting(false);
      setSubmittedAppointment(newAppt);
    }, 600);
  };

  const handleCopyReference = () => {
    if (submittedAppointment) {
      navigator.clipboard.writeText(
        `Health Plus Hospital Appointment Confirmation:\nReference: ${submittedAppointment.referenceNumber}\nPatient: ${submittedAppointment.patientName}\nDepartment: ${submittedAppointment.departmentName}\nDoctor: ${submittedAppointment.doctorName}\nDate: ${submittedAppointment.preferredDate} (${submittedAppointment.preferredTime})\nHospital Phone: ${config.phone}\nAddress: ${config.address}`
      );
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleWhatsAppShare = () => {
    if (submittedAppointment) {
      const text = encodeURIComponent(
        `Hello Health Plus Hospital, I have booked an appointment.\nReference: ${submittedAppointment.referenceNumber}\nPatient: ${submittedAppointment.patientName}\nDepartment: ${submittedAppointment.departmentName}\nDate: ${submittedAppointment.preferredDate} (${submittedAppointment.preferredTime})`
      );
      window.open(`https://wa.me/${config.whatsappNumber}?text=${text}`, '_blank');
    }
  };

  return (
    <section id="appointment" className="py-16 sm:py-24 bg-gradient-to-b from-sky-50/50 via-white to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-3 mb-10 sm:mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Outpatient Consultations
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Request an Appointment
          </h2>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Book your consultation with our experienced doctors. We will confirm your appointment via phone/SMS shortly.
          </p>
        </div>

        {/* Success Confirmation State */}
        {submittedAppointment ? (
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-teal-200 shadow-xl space-y-6 animate-in zoom-in-95 duration-200">
            <div className="flex items-center gap-4 border-b border-teal-100 pb-6">
              <div className="w-14 h-14 rounded-2xl bg-teal-50 text-teal-600 flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs font-bold text-teal-700 uppercase tracking-wider">
                  Request Confirmed & Received
                </span>
                <h3 className="text-2xl font-bold text-slate-900">
                  Appointment Reference: {submittedAppointment.referenceNumber}
                </h3>
              </div>
            </div>

            {/* Slip Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-50 p-6 rounded-2xl border border-slate-200 text-sm">
              <div>
                <span className="text-xs text-slate-500 font-medium">Patient Name</span>
                <p className="font-semibold text-slate-900 mt-0.5">{submittedAppointment.patientName}</p>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-medium">Department</span>
                <p className="font-semibold text-slate-900 mt-0.5">{submittedAppointment.departmentName}</p>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-medium">Doctor / Specialist</span>
                <p className="font-semibold text-slate-900 mt-0.5">{submittedAppointment.doctorName}</p>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-medium">Scheduled Date & Slot</span>
                <p className="font-semibold text-slate-900 mt-0.5">
                  {submittedAppointment.preferredDate} ({submittedAppointment.preferredTime})
                </p>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-medium">Contact Phone</span>
                <p className="font-semibold text-slate-900 mt-0.5">{submittedAppointment.phoneNumber}</p>
              </div>
              <div>
                <span className="text-xs text-slate-500 font-medium">Hospital Location</span>
                <p className="font-semibold text-slate-900 mt-0.5">96, TC Palya Main Rd, Battarahalli</p>
              </div>
            </div>

            <div className="text-xs text-slate-500 space-y-1">
              <p>• Our front desk team will contact you on <strong>{submittedAppointment.phoneNumber}</strong> if any slot adjustments are required.</p>
              <p>• For urgent medical concerns, please proceed directly to our 24/7 Casualty or call <strong>{config.phone}</strong>.</p>
            </div>

            {/* Actions on Confirmation */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
              <button
                onClick={handleCopyReference}
                className="px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Copy className="w-4 h-4" />
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Summary'}</span>
              </button>

              <button
                onClick={handleWhatsAppShare}
                className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer shadow-xs"
              >
                <Share2 className="w-4 h-4" />
                <span>Send via WhatsApp</span>
              </button>

              <button
                onClick={() => {
                  setSubmittedAppointment(null);
                  setFormData({
                    patientName: '',
                    phoneNumber: '',
                    email: '',
                    department: '',
                    doctor: '',
                    preferredDate: '',
                    preferredTime: '10:00 AM - 12:00 PM',
                    message: ''
                  });
                }}
                className="ml-auto text-xs font-semibold text-sky-600 hover:text-sky-800 cursor-pointer"
              >
                Book Another Appointment →
              </button>
            </div>
          </div>
        ) : (
          /* The Form */
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl space-y-6"
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Patient Name */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Patient Full Name <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="text"
                    required
                    value={formData.patientName}
                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                    placeholder="e.g. Ramesh Kumar"
                    className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-white focus:outline-hidden focus:ring-2 transition-all ${
                      errors.patientName
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                    }`}
                  />
                </div>
                {errors.patientName && (
                  <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.patientName}</span>
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="tel"
                    required
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="e.g. 9902647768"
                    className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-white focus:outline-hidden focus:ring-2 transition-all ${
                      errors.phoneNumber
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.phoneNumber}</span>
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. patient@example.com"
                    className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-white focus:outline-hidden focus:ring-2 transition-all ${
                      errors.email
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                    }`}
                  />
                </div>
                {errors.email && (
                  <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.email}</span>
                  </p>
                )}
              </div>

              {/* Department */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Department <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Stethoscope className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                  <select
                    required
                    value={formData.department}
                    onChange={(e) => {
                      setFormData({
                        ...formData,
                        department: e.target.value,
                        doctor: '' // reset doctor selection when department switches
                      });
                    }}
                    className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-white focus:outline-hidden focus:ring-2 transition-all appearance-none cursor-pointer ${
                      errors.department
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                    }`}
                  >
                    <option value="">Select Hospital Department</option>
                    {departments.map((dept) => (
                      <option key={dept.id} value={dept.name}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.department && (
                  <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.department}</span>
                  </p>
                )}
              </div>

              {/* Preferred Doctor */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Preferred Doctor (Optional)
                </label>
                <select
                  value={formData.doctor}
                  onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                  className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:border-sky-500 focus:outline-hidden focus:ring-2 focus:ring-sky-100 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Any Available Specialist in Department</option>
                  {availableDoctors.map((doc) => (
                    <option key={doc.id} value={doc.name}>
                      {doc.name} ({doc.departmentName})
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Date */}
              <div className="space-y-1.5">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  Preferred Date <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <CalendarIcon className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5 pointer-events-none" />
                  <input
                    type="date"
                    min={todayStr}
                    required
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className={`w-full pl-10 pr-4 py-2.5 text-sm rounded-xl border bg-white focus:outline-hidden focus:ring-2 transition-all ${
                      errors.preferredDate
                        ? 'border-red-400 focus:ring-red-200'
                        : 'border-slate-300 focus:border-sky-500 focus:ring-sky-100'
                    }`}
                  />
                </div>
                {errors.preferredDate && (
                  <p className="text-xs text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>{errors.preferredDate}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Preferred Time Slot */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Preferred Time Slot
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  'Morning: 09:30 AM - 01:00 PM',
                  'Afternoon: 02:00 PM - 05:00 PM',
                  'Evening: 05:30 PM - 08:30 PM'
                ].map((slot) => (
                  <button
                    key={slot}
                    type="button"
                    onClick={() => setFormData({ ...formData, preferredTime: slot })}
                    className={`py-2.5 px-3 text-xs font-semibold rounded-xl border text-center transition-all cursor-pointer ${
                      formData.preferredTime === slot
                        ? 'border-sky-600 bg-sky-50 text-sky-800 ring-2 ring-sky-200'
                        : 'border-slate-200 hover:border-slate-300 text-slate-700'
                    }`}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Message / Symptoms note */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                Message / Brief Symptoms (Optional)
              </label>
              <textarea
                rows={3}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Mention any symptoms, ongoing medications, or medical requirements..."
                className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-300 bg-white focus:border-sky-500 focus:outline-hidden focus:ring-2 focus:ring-sky-100 transition-all resize-y"
              />
            </div>

            {/* Disclaimer & Submit */}
            <div className="pt-2 space-y-3">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-500">
                  For emergency cases, please proceed to our Casualty directly. 
                  Helpline: <strong className="text-slate-800">{config.phone}</strong>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold text-sm transition-all shadow-md shadow-sky-600/20 disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Processing Request...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit Appointment Request</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              {onOpenTerms && (
                <p className="text-[11px] text-slate-400 text-center sm:text-left">
                  By submitting an appointment request, you acknowledge our{' '}
                  <button
                    type="button"
                    onClick={() => onOpenTerms('terms')}
                    className="text-sky-600 hover:underline font-medium cursor-pointer"
                  >
                    Hospital Terms of Service
                  </button>{' '}
                  and{' '}
                  <button
                    type="button"
                    onClick={() => onOpenTerms('privacy')}
                    className="text-sky-600 hover:underline font-medium cursor-pointer"
                  >
                    Patient Privacy Policy
                  </button>
                  .
                </p>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
