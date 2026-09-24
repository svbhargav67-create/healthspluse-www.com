/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Departments } from './components/Departments';
import { Services } from './components/Services';
import { EmergencySection } from './components/EmergencySection';
import { Doctors } from './components/Doctors';
import { Facilities } from './components/Facilities';
import { AppointmentBooking } from './components/AppointmentBooking';
import { AboutUs } from './components/AboutUs';
import { LocationMap } from './components/LocationMap';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { MobileQuickBar } from './components/MobileQuickBar';
import { StaffManageModal } from './components/StaffManageModal';
import { TermsModal } from './components/TermsModal';
import { NotFoundPage } from './components/NotFoundPage';
import { 
  getStoredConfig, 
  saveStoredConfig, 
  getStoredDepartments, 
  saveStoredDepartments, 
  getStoredDoctors, 
  saveStoredDoctors 
} from './data/hospitalData';
import { HospitalConfig, Department, Doctor } from './types/hospital';

export default function App() {
  const [config, setConfig] = useState<HospitalConfig>(getStoredConfig);
  const [departments, setDepartments] = useState<Department[]>(getStoredDepartments);
  const [doctors, setDoctors] = useState<Doctor[]>(getStoredDoctors);
  
  const [isStaffPortalOpen, setIsStaffPortalOpen] = useState(false);
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [termsTab, setTermsTab] = useState<'terms' | 'privacy' | 'rights'>('terms');
  const [preselectedDoctor, setPreselectedDoctor] = useState<string>('');
  const [preselectedDepartment, setPreselectedDepartment] = useState<string>('');
  const [is404, setIs404] = useState(false);

  // Smooth scroll to appointment form
  const scrollToAppointment = (doctorName?: string, departmentName?: string) => {
    if (doctorName) setPreselectedDoctor(doctorName);
    if (departmentName) setPreselectedDepartment(departmentName);
    
    const appointmentEl = document.getElementById('appointment');
    if (appointmentEl) {
      appointmentEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSaveDepartments = (updated: Department[]) => {
    setDepartments(updated);
    saveStoredDepartments(updated);
  };

  const handleSaveConfig = (updated: HospitalConfig) => {
    setConfig(updated);
    saveStoredConfig(updated);
  };

  if (is404) {
    return <NotFoundPage config={config} onReturnHome={() => setIs404(false)} />;
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-teal-100 selection:text-teal-900">
      {/* 1 & 2: Top Emergency Bar & Navigation Bar */}
      <Header
        config={config}
        onOpenBooking={() => scrollToAppointment()}
        onOpenStaffPortal={() => setIsStaffPortalOpen(true)}
      />

      <main className="flex-1">
        {/* 3: Hero Section */}
        <Hero
          config={config}
          onOpenBooking={() => scrollToAppointment()}
        />

        {/* 4: Why Choose Health Plus */}
        <WhyChooseUs
          onOpenBooking={() => scrollToAppointment()}
        />

        {/* 5: Departments / Specialities (Editable) */}
        <Departments
          departments={departments}
          onSelectDepartmentForBooking={(deptName) => scrollToAppointment(undefined, deptName)}
          onOpenStaffPortal={() => setIsStaffPortalOpen(true)}
        />

        {/* 6: Medical Services */}
        <Services
          onOpenBooking={() => scrollToAppointment()}
        />

        {/* 7: Emergency Care Section */}
        <EmergencySection
          config={config}
        />

        {/* 8: Doctors Section */}
        <Doctors
          doctors={doctors}
          onSelectDoctorForBooking={(doctorName, departmentName) => scrollToAppointment(doctorName, departmentName)}
          onOpenStaffPortal={() => setIsStaffPortalOpen(true)}
        />

        {/* 9: Facilities Section */}
        <Facilities />

        {/* 10: Appointment Booking Form */}
        <AppointmentBooking
          departments={departments}
          doctors={doctors}
          config={config}
          preselectedDoctor={preselectedDoctor}
          preselectedDepartment={preselectedDepartment}
          onOpenTerms={(tab) => {
            setTermsTab(tab);
            setIsTermsOpen(true);
          }}
        />

        {/* 11: About Us */}
        <AboutUs
          config={config}
        />

        {/* 12: Location & Google Map */}
        <LocationMap
          config={config}
        />

        {/* 13: Contact Section */}
        <ContactSection
          config={config}
          onOpenBooking={() => scrollToAppointment()}
        />
      </main>

      {/* 14: Footer */}
      <Footer
        config={config}
        departments={departments}
        onOpenBooking={() => scrollToAppointment()}
        onOpenStaffPortal={() => setIsStaffPortalOpen(true)}
        onOpenTerms={(tab) => {
          setTermsTab(tab);
          setIsTermsOpen(true);
        }}
      />

      {/* Floating WhatsApp Contact Action */}
      <WhatsAppButton config={config} />

      {/* Mobile Sticky Quick Emergency Bar (15% height constraint respected) */}
      <MobileQuickBar
        config={config}
        onOpenBooking={() => scrollToAppointment()}
      />

      {/* Hospital Staff Portal / Content Editor */}
      <StaffManageModal
        isOpen={isStaffPortalOpen}
        onClose={() => setIsStaffPortalOpen(false)}
        departments={departments}
        onSaveDepartments={handleSaveDepartments}
        config={config}
        onSaveConfig={handleSaveConfig}
      />

      {/* Hospital Terms & Privacy Policy Modal */}
      <TermsModal
        isOpen={isTermsOpen}
        onClose={() => setIsTermsOpen(false)}
        defaultTab={termsTab}
        config={config}
      />
    </div>
  );
}
