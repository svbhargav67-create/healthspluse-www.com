import React from 'react';
import { MessageCircle } from 'lucide-react';
import { HospitalConfig } from '../types/hospital';

interface WhatsAppButtonProps {
  config: HospitalConfig;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ config }) => {
  const message = encodeURIComponent(
    "Hello Health Plus Multi Speciality Hospital, I would like to inquire about medical consultations and emergency services."
  );

  return (
    <aside aria-label="Quick contact" className="fixed bottom-20 sm:bottom-6 right-5 z-40">
      <a
        href={`https://wa.me/${config.whatsappNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Health Plus Hospital on WhatsApp"
        className="group relative flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 active:scale-95"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
        <span className="hidden sm:inline text-xs font-bold tracking-wide">
          WhatsApp Helpdesk
        </span>

        {/* Pulse indicator */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
        </span>
      </a>
    </aside>
  );
};
