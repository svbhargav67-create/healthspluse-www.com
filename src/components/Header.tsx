import React, { useState } from 'react';
import { Phone, Clock, MapPin, Calendar, Menu, X, ShieldAlert, Heart, ChevronRight } from 'lucide-react';
import { HospitalConfig } from '../types/hospital';

interface HeaderProps {
  config: HospitalConfig;
  onOpenBooking: () => void;
  onOpenStaffPortal?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ config, onOpenBooking, onOpenStaffPortal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Departments', href: '#departments' },
    { name: 'Doctors', href: '#doctors' },
    { name: 'Services', href: '#services' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-xs">
      {/* 1. Top Emergency Bar */}
      <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 text-white py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-xs sm:text-sm">
          <div className="flex items-center gap-2 font-medium">
            <span className="flex h-2 w-2 rounded-full bg-white animate-pulse" />
            <span className="font-semibold tracking-wide">24/7 Emergency Care</span>
            <span className="hidden md:inline text-red-200">·</span>
            <span className="hidden md:inline text-red-100">Battarahalli, Bengaluru</span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-1.5 font-semibold text-white tabular-nums">
              <Phone className="w-3.5 h-3.5 text-red-200" />
              <span>{config.phone}</span>
            </div>
            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className="bg-white text-red-700 hover:bg-red-50 px-2.5 py-1 rounded font-bold text-xs shadow-xs transition-colors whitespace-nowrap"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo & Hospital Name */}
          <a
            href="#home"
            className="flex items-center gap-3.5 group focus:outline-hidden focus-visible:ring-2 focus-visible:ring-sky-500 rounded-lg p-1"
          >
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-sky-600 to-teal-600 flex items-center justify-center text-white shadow-md shadow-sky-600/20 group-hover:scale-102 transition-transform">
              <div className="relative">
                <span className="text-xl font-black leading-none tracking-tighter">+</span>
                <Heart className="w-3 h-3 text-white/90 absolute -bottom-1 -right-1 fill-white" />
              </div>
            </div>
            <div>
              <div className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-sky-700 transition-colors">
                Health Plus
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-teal-700">
                Multi Speciality Hospital
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-medium text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-sky-600 transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-sky-600 hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenBooking}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-sky-600 hover:bg-sky-700 active:bg-sky-800 transition-all shadow-sm shadow-sky-600/25 whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment</span>
            </button>

            {onOpenStaffPortal && (
              <button
                onClick={onOpenStaffPortal}
                title="Staff Portal (Edit Hospital Content)"
                className="p-2 text-xs font-medium text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-lg transition-colors border border-slate-200"
              >
                Staff Edit
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="sm:hidden px-3 py-1.5 rounded-lg text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700"
            >
              Book
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg focus:outline-hidden"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:bg-sky-50 hover:text-sky-700 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-slate-100 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 px-4 rounded-lg bg-sky-600 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
            >
              <Calendar className="w-4 h-4" />
              <span>Book an Appointment</span>
            </button>

            <a
              href={`tel:${config.phone.replace(/\s+/g, '')}`}
              className="w-full py-2.5 px-4 rounded-lg bg-red-50 text-red-700 border border-red-200 font-semibold text-sm flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Emergency: {config.phone}</span>
            </a>

            {onOpenStaffPortal && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenStaffPortal();
                }}
                className="w-full py-2 px-4 rounded-lg bg-slate-50 text-slate-600 hover:bg-slate-100 text-xs font-medium border border-slate-200"
              >
                Staff Portal: Modify Departments / Info
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
