import React, { useState } from 'react';
import { Phone, MapPin, Clock, Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { HospitalConfig } from '../types/hospital';

interface ContactSectionProps {
  config: HospitalConfig;
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ config, onOpenBooking }) => {
  const [inquiry, setInquiry] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'General Medical Inquiry',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: Record<string, string> = {};

    if (!inquiry.name.trim()) newErrors.name = 'Name is required';
    if (!inquiry.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!inquiry.message.trim()) newErrors.message = 'Please enter your message';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setSubmitting(true);
    setErrors({});

    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      setInquiry({
        name: '',
        phone: '',
        email: '',
        subject: 'General Medical Inquiry',
        message: ''
      });
      setTimeout(() => setSent(false), 5000);
    }, 500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="text-xs font-bold uppercase tracking-wider text-sky-700">
            Contact & Support
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
            Get in Touch with Health Plus
          </h2>
          <p className="text-base text-slate-600">
            Whether you need urgent emergency advice, consultation scheduling, or general inquiries, our hospital administration and front desk are ready to assist.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-50/80 rounded-3xl p-7 border border-slate-200/80 space-y-6">
              <h3 className="text-xl font-bold text-slate-900">Hospital Contact Information</h3>

              <div className="space-y-4 text-sm">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-red-100/70 text-red-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Phone & Helpline</span>
                    <p className="font-bold text-slate-900 mt-0.5 text-base">
                      <a href={`tel:${config.phone.replace(/\s+/g, '')}`} className="hover:text-red-600 transition-colors tabular-nums">
                        {config.phone}
                      </a>
                    </p>
                    <span className="text-xs text-slate-500">Available 24/7 for appointments & emergency</span>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-sky-100/70 text-sky-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Address</span>
                    <p className="font-semibold text-slate-900 mt-0.5 leading-snug">
                      {config.address}
                    </p>
                    <span className="text-xs text-slate-500">TC Palya Main Road corridor, Battarahalli</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100/70 text-teal-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Availability</span>
                    <p className="font-bold text-emerald-700 mt-0.5 text-base">
                      Open 24 Hours / 7 Days
                    </p>
                    <span className="text-xs text-slate-500">Casualty, Pharmacy, Laboratory & Admissions active 24/7</span>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp helper */}
              <div className="pt-4 border-t border-slate-200">
                <a
                  href={`https://wa.me/${config.whatsappNumber}?text=Hello%20Health%20Plus%20Hospital,%20I%20have%20an%20inquiry.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-colors text-center shadow-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat with Helpdesk on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-7 sm:p-9 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-2">Send an Inquiry or Feedback</h3>
            <p className="text-xs sm:text-sm text-slate-500 mb-6">
              Fill out this form and our hospital administration will respond promptly.
            </p>

            {sent ? (
              <div className="p-6 bg-teal-50 border border-teal-200 rounded-2xl flex items-center gap-3 text-teal-800 animate-in fade-in">
                <CheckCircle2 className="w-6 h-6 text-teal-600 shrink-0" />
                <div>
                  <h4 className="font-bold text-sm">Thank You for Your Message!</h4>
                  <p className="text-xs text-teal-700 mt-0.5">
                    Your inquiry has been received. Our team will contact you shortly on your provided phone number.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={inquiry.name}
                      onChange={(e) => setInquiry({ ...inquiry, name: e.target.value })}
                      placeholder="e.g. Anitha Rao"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-sky-500 focus:outline-hidden focus:ring-2 focus:ring-sky-100"
                    />
                    {errors.name && <p className="text-xs text-red-600">{errors.name}</p>}
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      value={inquiry.phone}
                      onChange={(e) => setInquiry({ ...inquiry, phone: e.target.value })}
                      placeholder="e.g. 9902647768"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-sky-500 focus:outline-hidden focus:ring-2 focus:ring-sky-100"
                    />
                    {errors.phone && <p className="text-xs text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Subject / Concern
                  </label>
                  <select
                    value={inquiry.subject}
                    onChange={(e) => setInquiry({ ...inquiry, subject: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-sky-500 focus:outline-hidden focus:ring-2 focus:ring-sky-100 appearance-none bg-white"
                  >
                    <option value="General Medical Inquiry">General Medical Inquiry</option>
                    <option value="OPD Timings & Doctor Schedule">OPD Timings & Doctor Schedule</option>
                    <option value="Diagnostic / Lab Investigation Query">Diagnostic / Lab Investigation Query</option>
                    <option value="Inpatient Admission / Surgery Pricing">Inpatient Admission / Surgery Pricing</option>
                    <option value="Feedback / Suggestions">Feedback / Suggestions</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={inquiry.message}
                    onChange={(e) => setInquiry({ ...inquiry, message: e.target.value })}
                    placeholder="How can our hospital team assist you?"
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-slate-300 focus:border-sky-500 focus:outline-hidden focus:ring-2 focus:ring-sky-100"
                  />
                  {errors.message && <p className="text-xs text-red-600">{errors.message}</p>}
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="text-xs font-semibold text-sky-600 hover:underline"
                  >
                    Looking to book an appointment instead? Click here →
                  </button>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="px-6 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-semibold text-xs flex items-center gap-2 shadow-xs transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {submitting ? 'Sending...' : 'Send Message'}
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
