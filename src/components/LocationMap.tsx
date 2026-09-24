import React from 'react';
import { MapPin, Navigation, Clock, Phone, Car, Compass, ExternalLink } from 'lucide-react';
import { HospitalConfig } from '../types/hospital';

interface LocationMapProps {
  config: HospitalConfig;
}

export const LocationMap: React.FC<LocationMapProps> = ({ config }) => {
  // Encoded query for TC Palya Main Rd, Brindavan Layout, Battarahalli, Bengaluru
  const mapEmbedUrl = "https://maps.google.com/maps?q=96,+TC+Palya+Main+Rd,+Brindavan+Layout,+TC+Palya,+Battarahalli,+Bengaluru,+Karnataka+560036&t=&z=15&ie=UTF8&iwloc=&output=embed";

  return (
    <section id="location" className="py-16 sm:py-24 bg-slate-50/50 border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div className="space-y-2 max-w-2xl">
            <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
              Hospital Location & Directions
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
              Find Health Plus in Battarahalli
            </h2>
            <p className="text-slate-600 text-base">
              Centrally located on TC Palya Main Road for swift access from KR Puram, Battarahalli, Ramamurthy Nagar, and surrounding localities.
            </p>
          </div>

          <a
            href={config.googleMapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-sm shadow-sm transition-all self-start md:self-auto cursor-pointer"
          >
            <Navigation className="w-4 h-4" />
            <span>Get Live Directions</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Location Content & Map Grid */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address Details Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white rounded-3xl p-7 border border-slate-200 shadow-sm space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700">
                  <MapPin className="w-4 h-4 text-teal-600" />
                  <span>Physical Address</span>
                </div>
                <div className="text-lg font-bold text-slate-900 leading-snug">
                  {config.name}
                </div>
                <p className="text-sm text-slate-700 leading-relaxed font-medium">
                  96, TC Palya Main Rd, Brindavan Layout, TC Palya, Battarahalli, Bengaluru, Karnataka 560036
                </p>
              </div>

              <div className="space-y-3 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Casualty / Emergency:</strong> Open 24 Hours / 7 Days
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Emergency & Helpline:</strong>{' '}
                    <a href={`tel:${config.phone.replace(/\s+/g, '')}`} className="text-sky-600 hover:underline font-semibold tabular-nums">
                      {config.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Access & Parking:</strong> Dedicated ambulance bay, wheelchair ramp, and visitor vehicle parking available.
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <a
                  href={config.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <Navigation className="w-4 h-4 text-teal-400" />
                  <span>Open in Google Maps</span>
                </a>
                <a
                  href={`tel:${config.phone.replace(/\s+/g, '')}`}
                  className="py-3 px-4 rounded-xl bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 font-semibold text-xs flex items-center justify-center gap-2 transition-colors text-center"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Hospital</span>
                </a>
              </div>
            </div>

            {/* Quick Transport Guide */}
            <div className="p-5 rounded-2xl bg-teal-50/60 border border-teal-200/80 text-xs text-slate-700 space-y-1.5">
              <div className="font-bold text-teal-900 flex items-center gap-1.5">
                <Compass className="w-4 h-4 text-teal-700" />
                <span>Locality Landmarks & Connectivity</span>
              </div>
              <p>
                Situated on the TC Palya Main Road corridor in Battarahalli, easily reachable within 10-15 minutes from KR Puram Railway Station and Old Madras Road.
              </p>
            </div>
          </div>

          {/* Right Column: Embedded Interactive Google Map */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-slate-300 shadow-md bg-slate-200 relative h-[420px] sm:h-[460px]">
              <iframe
                title="Health Plus Multi Speciality Hospital Location"
                src={mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Map floating banner */}
              <div className="absolute top-4 left-4 right-4 sm:right-auto bg-white/95 backdrop-blur-xs p-3 rounded-xl shadow-lg border border-slate-200 text-xs space-y-0.5">
                <div className="font-bold text-slate-900">Health Plus Multi Speciality Hospital</div>
                <div className="text-slate-600">Battarahalli, Bengaluru 560036</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
