import React, { useState } from 'react';
import { X, ShieldCheck, FileText, Lock, CheckCircle2, Printer } from 'lucide-react';
import { HospitalConfig } from '../types/hospital';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'terms' | 'privacy' | 'rights';
  config: HospitalConfig;
}

export const TermsModal: React.FC<TermsModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'terms',
  config,
}) => {
  const [activeTab, setActiveTab] = useState<'terms' | 'privacy' | 'rights'>(defaultTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-150">
      <div className="bg-white rounded-3xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl border border-slate-200 overflow-hidden">
        {/* Modal Header */}
        <div className="p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 border border-sky-400/30 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">
                Hospital Policies & Legal Information
              </h3>
              <p className="text-xs text-slate-400">
                {config.name} · Battarahalli, Bengaluru
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 py-2.5 bg-slate-100/80 border-b border-slate-200 flex items-center gap-2 text-xs font-semibold">
          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-white text-slate-900 shadow-2xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Terms of Service
          </button>
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-white text-slate-900 shadow-2xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Patient Privacy Policy
          </button>
          <button
            onClick={() => setActiveTab('rights')}
            className={`px-4 py-2 rounded-lg transition-all cursor-pointer ${
              activeTab === 'rights'
                ? 'bg-white text-slate-900 shadow-2xs font-bold'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Patient Rights Charter
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-sm text-slate-700 leading-relaxed flex-1">
          {activeTab === 'terms' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  Hospital Terms & Conditions of Service
                </h4>
                <p className="text-xs text-slate-500">
                  Last Updated: March 2026 · Health Plus Multi Speciality Hospital
                </p>
              </div>

              <section className="space-y-2">
                <h5 className="font-bold text-slate-900">1. Emergency & Casualty Triage</h5>
                <p>
                  Our casualty department operates 24 hours daily. In accordance with emergency medical ethics, medical cases presenting acute instability, trauma, respiratory collapse, or severe cardiac risk will receive immediate triage priority over scheduled outpatient consultations.
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-slate-900">2. Outpatient Appointment Scheduling</h5>
                <p>
                  Online appointment requests through this portal represent booking preferences. While our reception team strives to honor requested timings, exact consultation times may experience clinical delays if attending doctors are managing emergency interventions or inpatient emergencies.
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-slate-900">3. Patient Identification & Medical History</h5>
                <p>
                  Patients and attendants are required to provide genuine identity details, contact numbers, and complete disclosure of past medical conditions, existing medications, and known drug allergies to ensure clinical safety and optimal prescription care.
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-slate-900">4. Transparent Billing & Inpatient Admissions</h5>
                <p>
                  Estimated costs for planned surgeries, investigations, and bed categories will be communicated prior to elective admission. Emergency treatment will not be delayed for administrative formalities. All hospital tariffs comply with fair healthcare pricing standards.
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-slate-900">5. Website Information Disclaimer</h5>
                <p>
                  Content on this website is provided for informational and appointment convenience purposes only and does not substitute for in-person professional clinical diagnosis. In case of an emergency, please visit our casualty at 96, TC Palya Main Rd, Battarahalli or call {config.phone}.
                </p>
              </section>
            </div>
          )}

          {activeTab === 'privacy' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  Patient Privacy & Medical Data Protection Policy
                </h4>
                <p className="text-xs text-slate-500">
                  Committed to Patient Confidentiality and Ethical Medical Standards
                </p>
              </div>

              <section className="space-y-2">
                <h5 className="font-bold text-slate-900">1. Confidentiality of Health Records</h5>
                <p>
                  All patient medical records, laboratory diagnostic results, prescription histories, and surgical notes are kept strictly confidential under clinical privacy regulations and standard medical ethics.
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-slate-900">2. Collection of Contact Information</h5>
                <p>
                  Information collected via our appointment booking form (name, phone number, email, and symptoms note) is strictly utilized for appointment confirmation, hospital communication, patient verification, and medical record-keeping.
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-slate-900">3. Non-Disclosure Guarantee</h5>
                <p>
                  Health Plus Multi Speciality Hospital does not sell, trade, or distribute your personal phone numbers or health records to third-party commercial advertisers or telemarketers.
                </p>
              </section>

              <section className="space-y-2">
                <h5 className="font-bold text-slate-900">4. Access to Your Medical Reports</h5>
                <p>
                  Diagnostic laboratory and radiology reports are released only to the registered patient or authorized attendants upon presenting valid patient identification or appointment slips.
                </p>
              </section>
            </div>
          )}

          {activeTab === 'rights' && (
            <div className="space-y-5">
              <div>
                <h4 className="text-lg font-bold text-slate-900 mb-1">
                  Patient Rights & Responsibilities Charter
                </h4>
                <p className="text-xs text-slate-500">
                  Ensuring Respect, Dignity and Ethical Clinical Care
                </p>
              </div>

              <div className="space-y-3">
                <h5 className="font-bold text-slate-900">Patient Rights:</h5>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Right to receive prompt medical care and emergency stabilization regardless of social or financial background.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Right to be informed about diagnosis, proposed treatments, potential risks, and alternative options in clear, understandable language.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Right to privacy and confidentiality during examinations, procedures, and inpatient care.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>Right to obtain itemized bills and transparent explanations of all medical charges.</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-3 pt-3 border-t border-slate-200">
                <h5 className="font-bold text-slate-900">Patient Responsibilities:</h5>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">•</span>
                    <span>To provide honest and comprehensive details of medical history and allergies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">•</span>
                    <span>To maintain hospital decorum, silence, and hygiene across patient recovery wards.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-slate-400 font-bold">•</span>
                    <span>To respect duty doctors, nurses, and support staff members providing critical clinical assistance.</span>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between text-xs">
          <span className="text-slate-500">
            Helpline: <strong className="text-slate-800">{config.phone}</strong>
          </span>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
