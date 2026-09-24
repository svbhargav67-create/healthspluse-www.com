import React from 'react';
import { Phone, Calendar, Navigation } from 'lucide-react';
import { HospitalConfig } from '../types/hospital';

interface MobileQuickBarProps {
  config: HospitalConfig;
  onOpenBooking: () => void;
}

export const MobileQuickBar: React.FC<MobileQuickBarProps> = ({ config, onOpenBooking }) => {
  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl">
      <div className="grid grid-cols-3 gap-2">
        {/* Emergency Call */}
        <a
          href={`tel:${config.phone.replace(/\s+/g, '')}`}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-red-600 text-white font-bold text-[11px] shadow-xs active:bg-red-700"
        >
          <Phone className="w-4 h-4 mb-0.5 animate-pulse" />
          <span>Call 24/7</span>
        </a>

        {/* Book Appointment */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-sky-600 text-white font-bold text-[11px] shadow-xs active:bg-sky-700 cursor-pointer"
        >
          <Calendar className="w-4 h-4 mb-0.5" />
          <span>Book OPD</span>
        </button>

        {/* Directions */}
        <a
          href={config.googleMapsDirectionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-[11px] border border-slate-200"
        >
          <Navigation className="w-4 h-4 mb-0.5 text-teal-600" />
          <span>Directions</span>
        </a>
      </div>
    </div>
  );
};
