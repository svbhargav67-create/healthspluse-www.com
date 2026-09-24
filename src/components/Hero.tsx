import React from 'react';
import { Calendar, Phone, Navigation, Clock, ShieldCheck, MapPin, HeartPulse, Sparkles } from 'lucide-react';
import { HospitalConfig } from '../types/hospital';

interface HeroProps {
  config: HospitalConfig;
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onOpenBooking }) => {
  return (
    <section id="home" className="relative bg-gradient-to-b from-sky-50/70 via-white to-white pt-6 pb-16 lg:pt-12 lg:pb-24 overflow-hidden">
      {/* Subtle background ambient mesh */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/3 left-0 -z-10 w-80 h-80 bg-sky-100/40 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Healthcare Message & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            {/* Trust Kicker - Zero-Pill text metadata */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-teal-800">
              <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Open 24 Hours</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>TC Palya Main Road, Battarahalli</span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span>Bengaluru East</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-950 leading-[1.12] text-balance">
                Quality Healthcare, <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-700 via-teal-700 to-sky-800">
                  Available 24/7
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
                Compassionate medical care, modern facilities and experienced healthcare professionals for you and your family.
              </p>
            </div>

            {/* 3 Prominent Required Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3.5 rounded-xl bg-sky-600 hover:bg-sky-700 active:bg-sky-800 text-white font-semibold text-base shadow-md shadow-sky-600/20 transition-all flex items-center justify-center gap-2.5 cursor-pointer"
              >
                <Calendar className="w-5 h-5" />
                <span>Book an Appointment</span>
              </button>

              <a
                href={`tel:${config.phone.replace(/\s+/g, '')}`}
                className="px-6 py-3.5 rounded-xl bg-red-600 hover:bg-red-700 active:bg-red-800 text-white font-semibold text-base shadow-md shadow-red-600/20 transition-all flex items-center justify-center gap-2.5"
              >
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>

              <a
                href={config.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-base transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Navigation className="w-5 h-5 text-teal-700" />
                <span>Get Directions</span>
              </a>
            </div>

            {/* Quick Hospital Fact Grid */}
            <div className="pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-slate-700">
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                  24/7
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">Emergency Care</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight tabular-nums">
                  8+
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">Core Specialities</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  In-House
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">Pharmacy & Lab</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  Modern
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium">Operation Suites</div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Hospital Showcase Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-100 group">
              <img
                src="/src/assets/images/hero_hospital_exterior_1790255688035.jpg"
                alt="Health Plus Multi Speciality Hospital building exterior in Bengaluru"
                className="w-full h-80 sm:h-96 lg:h-[480px] object-cover group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="eager"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent" />

              {/* Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>24-Hour Active Triage & Casualty</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  Health Plus Multi Speciality Hospital
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>96, TC Palya Main Rd, Brindavan Layout, Battarahalli, Bengaluru</span>
                </p>
                <div className="pt-2 flex items-center justify-between text-xs text-slate-300 border-t border-white/15">
                  <span>Helpline: <strong className="text-white tabular-nums">{config.phone}</strong></span>
                  <span className="text-sky-300 font-semibold">Walk-ins Welcome</span>
                </div>
              </div>
            </div>

            {/* Floating Trust Indicator */}
            <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-white p-4 rounded-xl shadow-xl border border-slate-100 items-center gap-3.5 max-w-xs">
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 shrink-0">
                <HeartPulse className="w-6 h-6" />
              </div>
              <div className="text-xs">
                <div className="font-bold text-slate-900">Multi-Speciality Doctors</div>
                <div className="text-slate-500">OPD & round-the-clock emergency medical coverage</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
