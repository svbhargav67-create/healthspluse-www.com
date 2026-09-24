import React from 'react';
import { 
  ShieldAlert, 
  HeartPulse, 
  Sparkles, 
  FlaskConical, 
  Scan, 
  Pill, 
  BedDouble, 
  Ambulance, 
  Check, 
  ArrowUpRight 
} from 'lucide-react';
import { DEFAULT_SERVICES } from '../data/hospitalData';

interface ServicesProps {
  onOpenBooking: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenBooking }) => {
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldAlert': return ShieldAlert;
      case 'HeartPulse': return HeartPulse;
      case 'Sparkles': return Sparkles;
      case 'FlaskConical': return FlaskConical;
      case 'Scan': return Scan;
      case 'Pill': return Pill;
      case 'BedDouble': return BedDouble;
      case 'Ambulance': return Ambulance;
      default: return HeartPulse;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Medical Services
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Comprehensive Clinical & Diagnostic Support
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            From emergency trauma stabilization to routine diagnostics, pharmacy, and hospital admissions, all essential services operate under unified medical oversight.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEFAULT_SERVICES.map((srv) => {
            const Icon = getServiceIcon(srv.iconName);
            const isEmergencyService = srv.id === 'srv-emergency' || srv.id === 'srv-ambulance';

            return (
              <div
                key={srv.id}
                className={`rounded-2xl p-6 border transition-all duration-200 flex flex-col justify-between group ${
                  isEmergencyService
                    ? 'bg-gradient-to-b from-red-50/40 via-white to-white border-red-200/80 hover:border-red-300 hover:shadow-md'
                    : 'bg-white border-slate-200 hover:border-sky-300 hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                        isEmergencyService
                          ? 'bg-red-100/70 text-red-600 group-hover:bg-red-600 group-hover:text-white'
                          : 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-semibold text-slate-500">
                      {srv.availability}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-800 transition-colors">
                      {srv.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {srv.shortDesc}
                    </p>
                  </div>

                  {/* Feature Checklist */}
                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    {srv.features.map((feat, i) => (
                      <div key={i} className="text-xs text-slate-600 flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-400">Available On-Campus</span>
                  {srv.id === 'srv-ambulance' ? (
                    <a
                      href="tel:09902647768"
                      className="text-red-600 hover:text-red-700 flex items-center gap-1"
                    >
                      Call Ambulance
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <button
                      onClick={onOpenBooking}
                      className="text-sky-600 hover:text-sky-700 flex items-center gap-1 cursor-pointer"
                    >
                      Inquire
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
