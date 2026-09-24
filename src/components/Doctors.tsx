import React, { useState } from 'react';
import { 
  User, 
  Calendar, 
  Clock, 
  MapPin, 
  Languages, 
  Award, 
  X, 
  Stethoscope, 
  CheckCircle, 
  ChevronRight,
  UserCheck
} from 'lucide-react';
import { Doctor } from '../types/hospital';

interface DoctorsProps {
  doctors: Doctor[];
  onSelectDoctorForBooking: (doctorName: string, departmentName: string) => void;
  onOpenStaffPortal?: () => void;
}

export const Doctors: React.FC<DoctorsProps> = ({
  doctors,
  onSelectDoctorForBooking,
  onOpenStaffPortal
}) => {
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  return (
    <section id="doctors" className="py-16 sm:py-24 bg-slate-50/60 border-t border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Experienced Healthcare Professionals
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Our Medical Specialists
            </h2>
            <p className="text-slate-600 text-base">
              Consult with dedicated clinical specialists across medicine, surgery, obstetrics, pediatrics, and critical patient care.
            </p>
          </div>

          <div className="text-xs text-slate-500 bg-white px-3 py-2 rounded-lg border border-slate-200 shadow-2xs">
            OPD Consultations Available Monday – Saturday & 24/7 Casualty
          </div>
        </div>

        {/* Doctor Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {doctors.map((doctor) => {
            return (
              <div
                key={doctor.id}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-xs hover:border-sky-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Doctor Profile Header with medical portrait container */}
                  <div className="p-6 bg-gradient-to-br from-slate-50 via-sky-50/30 to-teal-50/20 border-b border-slate-100 flex items-center gap-4">
                    <div className="relative w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-sky-700 shrink-0 group-hover:scale-105 transition-transform">
                      <UserCheck className="w-8 h-8" />
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white" title="Available for Consultation" />
                    </div>

                    <div className="min-w-0">
                      <div className="text-xs font-bold text-teal-700 truncate">
                        {doctor.departmentName}
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 leading-snug truncate">
                        {doctor.name}
                      </h3>
                      <div className="text-xs text-slate-500 font-medium">
                        {doctor.experience}
                      </div>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                      {doctor.about}
                    </p>

                    <div className="space-y-2 text-xs text-slate-600">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="font-medium truncate">{doctor.opdSchedule}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{doctor.consultationRoom}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Languages className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">Languages: {doctor.languages.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-6 pt-0 grid grid-cols-2 gap-2.5">
                  <button
                    onClick={() => setSelectedDoctor(doctor)}
                    className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors flex items-center justify-center gap-1 cursor-pointer"
                  >
                    <span>View Profile</span>
                  </button>

                  <button
                    onClick={() => onSelectDoctorForBooking(doctor.name, doctor.departmentName)}
                    className="w-full py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 transition-colors flex items-center justify-center gap-1 shadow-2xs cursor-pointer"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book OPD</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Doctor Profile Modal */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150">
          <div className="bg-white rounded-3xl max-w-lg w-full overflow-hidden shadow-2xl border border-slate-200">
            {/* Modal Header */}
            <div className="p-6 bg-gradient-to-r from-sky-700 to-teal-800 text-white flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-xs border border-white/20 flex items-center justify-center text-white">
                  <UserCheck className="w-7 h-7" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-sky-200 uppercase tracking-wider">
                    {selectedDoctor.departmentName}
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    {selectedDoctor.name}
                  </h3>
                  <div className="text-xs text-white/80">
                    {selectedDoctor.experience}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedDoctor(null)}
                className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                  About Specialist & Clinical Focus
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {selectedDoctor.about}
                </p>
              </div>

              <div className="space-y-3 p-4 bg-slate-50 rounded-xl border border-slate-200/80 text-xs sm:text-sm">
                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900">OPD Timings:</span>
                    <p className="text-slate-600 mt-0.5">{selectedDoctor.opdSchedule}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900">Consultation Location:</span>
                    <p className="text-slate-600 mt-0.5">{selectedDoctor.consultationRoom}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Languages className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900">Spoken Languages:</span>
                    <p className="text-slate-600 mt-0.5">{selectedDoctor.languages.join(', ')}</p>
                  </div>
                </div>
              </div>

              <div className="text-xs text-slate-500 bg-teal-50/60 p-3 rounded-lg border border-teal-100 flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <span>Appointments are prioritized for minimal waiting time. Emergency consultations are accepted directly at the Casualty.</span>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-3">
              <button
                onClick={() => setSelectedDoctor(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const doc = selectedDoctor;
                  setSelectedDoctor(null);
                  onSelectDoctorForBooking(doc.name, doc.departmentName);
                }}
                className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs flex items-center gap-1.5 shadow-sm"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment with Specialist</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
