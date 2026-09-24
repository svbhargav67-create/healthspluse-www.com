import React from 'react';
import { 
  Building, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  CheckCircle2, 
  HeartHandshake, 
  Activity 
} from 'lucide-react';
import { HospitalConfig } from '../types/hospital';

interface AboutUsProps {
  config: HospitalConfig;
}

export const AboutUs: React.FC<AboutUsProps> = ({ config }) => {
  return (
    <section id="about" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Hospital Overview Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
                About Health Plus Multi Speciality Hospital
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight">
                Dedicated Community Healthcare on TC Palya Main Road
              </h2>
            </div>

            <div className="text-base text-slate-600 space-y-4 leading-relaxed">
              <p>
                <strong>Health Plus Multi Speciality Hospital</strong> was established to provide reliable, responsive, and compassionate medical care to residents and families across Battarahalli, TC Palya, KR Puram, and surrounding Bengaluru neighborhoods.
              </p>
              <p>
                Operating with a round-the-clock emergency casualty, dedicated diagnostic testing, and an array of core clinical specialities, our mission is to ensure quality medical consultations and inpatient treatments are easily accessible close to home.
              </p>
              <p>
                We prioritize clinical transparency, clean hospital hygiene, prompt emergency medical attention, and patient dignity at every stage of diagnosis and recovery.
              </p>
            </div>

            {/* Factual Core Commitments */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                  <Clock className="w-4 h-4 text-sky-600" />
                  <span>24-Hour Active Availability</span>
                </div>
                <p className="text-xs text-slate-600">
                  Continuous casualty coverage with duty doctors, oxygen-supported trauma beds, and emergency pharmacy.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
                <div className="flex items-center gap-2 font-bold text-sm text-slate-900">
                  <ShieldCheck className="w-4 h-4 text-teal-600" />
                  <span>Integrated Healthcare</span>
                </div>
                <p className="text-xs text-slate-600">
                  Outpatient clinics, day-care surgeries, inpatient wards, pathology testing, and radiology under one roof.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3 text-xs sm:text-sm text-slate-500">
              <MapPin className="w-4 h-4 text-sky-600 shrink-0" />
              <span>96, TC Palya Main Rd, Brindavan Layout, TC Palya, Battarahalli, Bengaluru 560036</span>
            </div>
          </div>

          {/* Right Column: Visual Infographic & Quality Pillars */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-gradient-to-br from-slate-900 via-sky-950 to-teal-950 rounded-3xl p-8 text-white shadow-xl space-y-6">
              <div className="space-y-1">
                <div className="text-xs uppercase font-bold tracking-wider text-sky-300">
                  Care Principles
                </div>
                <h3 className="text-2xl font-bold">Our Medical Philosophy</h3>
              </div>

              <div className="space-y-4 text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-sky-300 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Immediate Emergency Attention</strong>
                    <span className="text-xs text-slate-300">Zero waiting triage protocol for acute medical and trauma crises.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-sky-300 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Clean Clinical Environment</strong>
                    <span className="text-xs text-slate-300">Strict hygiene protocols across consultation rooms, operation theaters, and patient wards.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center shrink-0 text-sky-300 mt-0.5">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-white block font-semibold">Clear Patient Communication</strong>
                    <span className="text-xs text-slate-300">Thorough explanations of diagnoses, prescribed treatments, and follow-up guidance.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-300">
                <span>Emergency Contact:</span>
                <span className="text-white font-bold tabular-nums">{config.phone}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
