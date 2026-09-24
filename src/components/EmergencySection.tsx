import React from 'react';
import { Phone, Navigation, Clock, ShieldAlert, Ambulance, AlertCircle, Heart } from 'lucide-react';
import { HospitalConfig } from '../types/hospital';

interface EmergencySectionProps {
  config: HospitalConfig;
}

export const EmergencySection: React.FC<EmergencySectionProps> = ({ config }) => {
  return (
    <section className="relative py-16 sm:py-20 bg-gradient-to-br from-red-600 via-rose-700 to-red-800 text-white overflow-hidden shadow-inner">
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 -z-0 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -z-0 w-72 h-72 bg-red-950/40 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 lg:p-14 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Core Emergency Message */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/20 text-white font-semibold text-xs tracking-wider uppercase">
                <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping" />
                <span>24/7 Casualty & Critical Triage</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Need Medical Help Right Now?
                </h2>
                <p className="text-lg sm:text-xl text-red-50 max-w-2xl leading-relaxed font-normal">
                  Our hospital is open 24 hours for emergency and urgent medical care.
                </p>
              </div>

              {/* Emergency Call to Action */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${config.phone.replace(/\s+/g, '')}`}
                  className="px-8 py-4 rounded-xl bg-white hover:bg-red-50 text-red-700 font-extrabold text-lg sm:text-xl shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center gap-3 active:scale-98"
                >
                  <Phone className="w-6 h-6 text-red-600 fill-red-100 animate-bounce" />
                  <span>Call {config.phone}</span>
                </a>

                <a
                  href={config.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-4 rounded-xl bg-white/15 hover:bg-white/25 text-white font-semibold text-base transition-colors flex items-center justify-center gap-2 border border-white/30 backdrop-blur-xs"
                >
                  <Navigation className="w-5 h-5 text-red-200" />
                  <span>Get Directions to Casualty</span>
                </a>
              </div>

              {/* Emergency triage advice */}
              <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-red-100 font-medium">
                <span className="flex items-center gap-1.5">
                  <ShieldAlert className="w-4 h-4 text-white" />
                  Duty Medical Officer on Duty
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-white" />
                  Zero Waiting for Acute Trauma
                </span>
                <span className="flex items-center gap-1.5">
                  <Ambulance className="w-4 h-4 text-white" />
                  Oxygen-Equipped Ambulance
                </span>
              </div>
            </div>

            {/* Right Column: Quick Emergency Information Box */}
            <div className="lg:col-span-4 bg-red-950/40 rounded-2xl p-6 border border-white/15 space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-white uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-amber-300" />
                <span>When to Visit Casualty Directly</span>
              </div>
              <ul className="text-xs sm:text-sm text-red-100 space-y-2.5">
                <li className="flex items-start gap-2">
                  <span className="text-amber-300 font-bold">·</span>
                  <span>Severe chest pain, tightness or irregular heartbeat</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-300 font-bold">·</span>
                  <span>Acute breathing difficulty or choking</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-300 font-bold">·</span>
                  <span>Sudden loss of consciousness, head trauma or convulsions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-300 font-bold">·</span>
                  <span>Severe burns, deep lacerations, or bone fractures</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-300 font-bold">·</span>
                  <span>High fevers with dehydration, especially in infants</span>
                </li>
              </ul>
              <div className="pt-2 border-t border-white/10 text-xs text-red-200">
                Direct Walk-in Address: <strong>96, TC Palya Main Rd, Battarahalli</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
