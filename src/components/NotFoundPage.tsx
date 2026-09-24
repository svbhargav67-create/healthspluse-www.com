import React from 'react';
import { Home, Phone, ArrowLeft, Heart, ShieldAlert } from 'lucide-react';
import { HospitalConfig } from '../types/hospital';

interface NotFoundPageProps {
  config: HospitalConfig;
  onReturnHome: () => void;
}

export const NotFoundPage: React.FC<NotFoundPageProps> = ({ config, onReturnHome }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between">
      {/* Mini top bar */}
      <header className="bg-white border-b border-slate-200 py-4 px-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-sky-600 flex items-center justify-center text-white font-black text-sm">
            +
          </div>
          <span className="font-bold text-slate-900 text-sm">Health Plus Multi Speciality Hospital</span>
        </div>
        <a
          href={`tel:${config.phone.replace(/\s+/g, '')}`}
          className="text-xs font-bold text-red-600 hover:text-red-700 flex items-center gap-1"
        >
          <Phone className="w-3.5 h-3.5" />
          <span>Emergency: {config.phone}</span>
        </a>
      </header>

      {/* Main 404 Card */}
      <main className="max-w-xl mx-auto px-6 py-16 text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-sky-100 text-sky-700 mx-auto flex items-center justify-center">
          <ShieldAlert className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-600">Error 404</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
            Page Not Found
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            The medical page or resource you are looking for is unavailable or has moved. If you require immediate clinical assistance, our emergency hospital care is open 24 hours.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <button
            onClick={onReturnHome}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm cursor-pointer"
          >
            <Home className="w-4 h-4" />
            <span>Return to Hospital Homepage</span>
          </button>

          <a
            href={`tel:${config.phone.replace(/\s+/g, '')}`}
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-sm flex items-center justify-center gap-2"
          >
            <Phone className="w-4 h-4 text-red-600" />
            <span>Call Casualty Helpdesk</span>
          </a>
        </div>
      </main>

      <footer className="text-center py-6 text-xs text-slate-400 border-t border-slate-200">
        © {new Date().getFullYear()} Health Plus Multi Speciality Hospital, Battarahalli, Bengaluru.
      </footer>
    </div>
  );
};
