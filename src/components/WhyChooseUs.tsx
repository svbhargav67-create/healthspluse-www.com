import React from 'react';
import { 
  Clock, 
  UserCheck, 
  Stethoscope, 
  Building2, 
  ShieldAlert, 
  HeartHandshake, 
  ArrowRight 
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBooking: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBooking }) => {
  const reasons = [
    {
      icon: Clock,
      title: "24/7 Hospital Services",
      desc: "Emergency triage, inpatient admissions, laboratory testing, and round-the-clock pharmacy services available every single day of the year.",
      highlight: "Always Open for You"
    },
    {
      icon: UserCheck,
      title: "Experienced Medical Professionals",
      desc: "Our qualified specialists bring extensive clinical experience across medicine, surgery, obstetrics, pediatrics, and critical patient care.",
      highlight: "Qualified Clinical Team"
    },
    {
      icon: Stethoscope,
      title: "Multi-Speciality Care",
      desc: "From outpatient diagnosis to surgical procedures and post-operative recovery, access integrated multidisciplinary treatments under one roof.",
      highlight: "Comprehensive Care"
    },
    {
      icon: Building2,
      title: "Modern Facilities",
      desc: "Laminar flow operation theaters, dedicated high-dependency intensive care beds, digital X-rays, ultrasound, and comfortable recovery wards.",
      highlight: "Clean & Modern Infrastructure"
    },
    {
      icon: ShieldAlert,
      title: "Emergency Care",
      desc: "Rapid response casualty unit with on-site duty doctors, oxygen-supported trauma bays, emergency medicines, and swift ambulance dispatch.",
      highlight: "Immediate Medical Response"
    },
    {
      icon: HeartHandshake,
      title: "Patient-Focused Treatment",
      desc: "Clear medical counseling, transparent billing, compassionate nursing attention, and individualized treatment plans respecting every family.",
      highlight: "Compassionate Healing"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Why Choose Health Plus
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 text-balance">
            Dedicated Healthcare with Standards You Can Rely On
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Serving Battarahalli and Bengaluru East with dependable clinical medical care, prompt emergency assistance, and compassionate healing.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reasons.map((reason, idx) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.title}
                className="bg-slate-50/70 hover:bg-white rounded-2xl p-7 border border-slate-200/80 hover:border-sky-300 hover:shadow-lg hover:shadow-sky-500/5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 shadow-xs flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-200">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <div className="text-xs font-medium text-teal-700 mb-1">
                      {reason.highlight}
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-900 transition-colors">
                      {reason.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {reason.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                  <span>0{idx + 1}</span>
                  <span className="font-semibold text-slate-400 group-hover:text-sky-600 transition-colors flex items-center gap-1">
                    Excellence in Care
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-sky-900 via-slate-900 to-teal-950 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl font-bold">Have questions or need to consult a doctor?</h3>
            <p className="text-sm text-slate-300">
              Our patient helpdesk is available 24/7 to assist with consultations and emergency care.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold text-sm transition-colors cursor-pointer"
            >
              Book an Appointment
            </button>
            <a
              href="tel:09902647768"
              className="px-4 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-medium text-sm transition-colors border border-white/20"
            >
              Call 099026 47768
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
