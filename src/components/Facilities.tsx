import React from 'react';
import { ShieldCheck, Sparkles, Building, CheckCircle2 } from 'lucide-react';
import { DEFAULT_FACILITIES } from '../data/hospitalData';

export const Facilities: React.FC = () => {
  return (
    <section id="facilities" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Hospital Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Modern Facilities Built for Healing & Safety
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Explore the clinical environments designed to provide optimal hygiene, rapid critical response, and supportive patient comfort.
          </p>
        </div>

        {/* 4 Large Showcase Cards */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {DEFAULT_FACILITIES.map((facility) => (
            <div
              key={facility.id}
              className="group rounded-3xl overflow-hidden bg-slate-50 border border-slate-200/90 hover:border-sky-300 hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image Container with Fallback */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-200">
                <img
                  src={facility.imageUrl}
                  alt={facility.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  onError={(e) => {
                    // Graceful fallback to styled medical pattern
                    (e.target as HTMLElement).style.display = 'none';
                  }}
                />
                
                {/* Fallback styling if image fails */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent pointer-events-none" />

                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white/95 text-slate-900 text-xs font-bold shadow-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                    <span>{facility.highlight}</span>
                  </span>
                </div>
              </div>

              {/* Text Description */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {facility.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500 font-medium">
                  <span>Sterile Protocols Enforced</span>
                  <span className="text-sky-600 font-semibold group-hover:translate-x-1 transition-transform">
                    Available On Campus →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
