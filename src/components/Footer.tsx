import React from 'react';
import { 
  Heart, 
  Phone, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Share2 
} from 'lucide-react';
import { HospitalConfig, Department } from '../types/hospital';

interface FooterProps {
  config: HospitalConfig;
  departments: Department[];
  onOpenBooking: () => void;
  onOpenStaffPortal?: () => void;
  onOpenTerms?: (tab: 'terms' | 'privacy' | 'rights') => void;
}

export const Footer: React.FC<FooterProps> = ({
  config,
  departments,
  onOpenBooking,
  onOpenStaffPortal,
  onOpenTerms,
}) => {
  const currentYear = new Date().getFullYear();

  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Emergency Focus (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-teal-500 flex items-center justify-center text-white shadow-md">
                <div className="relative">
                  <span className="text-xl font-black leading-none">+</span>
                  <Heart className="w-2.5 h-2.5 text-white absolute -bottom-1 -right-1 fill-white" />
                </div>
              </div>
              <div>
                <div className="text-lg font-bold text-white tracking-tight">
                  Health Plus
                </div>
                <div className="text-xs uppercase tracking-wider text-teal-400 font-semibold">
                  Multi Speciality Hospital
                </div>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Dedicated 24/7 hospital providing modern medical diagnostics, general & laparoscopic surgery, obstetrics, pediatrics, and emergency casualty care in Battarahalli, Bengaluru.
            </p>

            <div className="p-4 rounded-2xl bg-red-950/40 border border-red-900/60 text-xs text-red-200 space-y-1">
              <div className="font-bold text-red-100 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
                <span>24/7 Emergency Casualty Phone</span>
              </div>
              <p className="text-sm font-bold text-white">
                <a href={`tel:${config.phone.replace(/\s+/g, '')}`} className="hover:underline tabular-nums">
                  {config.phone}
                </a>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {[
                { name: 'Home', href: '#home' },
                { name: 'About Hospital', href: '#about' },
                { name: 'Departments', href: '#departments' },
                { name: 'Doctors & OPD', href: '#doctors' },
                { name: 'Medical Services', href: '#services' },
                { name: 'Facilities', href: '#facilities' },
                { name: 'Location Map', href: '#location' },
                { name: 'Contact Us', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll(link.href);
                    }}
                    className="hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Departments (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Key Specialities
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              {departments.slice(0, 6).map((dept) => (
                <li key={dept.id}>
                  <a
                    href="#departments"
                    onClick={(e) => {
                      e.preventDefault();
                      handleScroll('#departments');
                    }}
                    className="hover:text-white transition-colors truncate block"
                  >
                    {dept.name}
                  </a>
                </li>
              ))}
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-xs text-teal-400 hover:text-teal-300 font-semibold cursor-pointer"
                >
                  + Book Appointment in Any Speciality
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information & Address (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Hospital Address
            </h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="leading-snug">
                  96, TC Palya Main Rd, Brindavan Layout, TC Palya, Battarahalli, Bengaluru, Karnataka 560036
                </span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-500 text-xs">Call Helpline:</span>
                  <a href={`tel:${config.phone.replace(/\s+/g, '')}`} className="text-white font-medium hover:underline tabular-nums">
                    {config.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-slate-500 text-xs">Emergency & IPD:</span>
                  <span className="text-emerald-400 font-semibold">Open 24 Hours / 365 Days</span>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="pt-2">
                <span className="text-xs uppercase font-semibold text-slate-500 block mb-2">Connect with Us</span>
                <div className="flex items-center gap-2.5">
                  {[
                    { label: 'Facebook', icon: 'FB' },
                    { label: 'Instagram', icon: 'IG' },
                    { label: 'LinkedIn', icon: 'IN' },
                    { label: 'YouTube', icon: 'YT' }
                  ].map((item) => (
                    <a
                      key={item.label}
                      href="#home"
                      title={item.label}
                      className="w-8 h-8 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white flex items-center justify-center text-xs font-bold transition-colors"
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {currentYear} Health Plus Multi Speciality Hospital. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-400">
            {onOpenTerms && (
              <>
                <button
                  onClick={() => onOpenTerms('terms')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <button
                  onClick={() => onOpenTerms('privacy')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Patient Privacy Policy
                </button>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <button
                  onClick={() => onOpenTerms('rights')}
                  className="hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Patient Rights
                </button>
                <span aria-hidden="true" className="text-slate-700">·</span>
              </>
            )}
            <span>TC Palya, Battarahalli, Bengaluru</span>
            {onOpenStaffPortal && (
              <>
                <span aria-hidden="true" className="text-slate-700">·</span>
                <button
                  onClick={onOpenStaffPortal}
                  className="text-slate-400 hover:text-teal-400 transition-colors cursor-pointer"
                >
                  Staff Portal
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
