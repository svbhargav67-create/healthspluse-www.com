import { Department, Doctor, MedicalService, Facility, HospitalConfig } from '../types/hospital';

export const DEFAULT_HOSPITAL_CONFIG: HospitalConfig = {
  name: "Health Plus Multi Speciality Hospital",
  address: "96, TC Palya Main Rd, Brindavan Layout, TC Palya, Battarahalli, Bengaluru, Karnataka 560036",
  phone: "099026 47768",
  phoneRaw: "+919902647768",
  whatsappNumber: "919902647768",
  emergencyPhone: "099026 47768",
  timing: "Open 24 hours",
  locationArea: "TC Palya, Battarahalli",
  city: "Bengaluru",
  pincode: "560036",
  googleMapsDirectionsUrl: "https://www.google.com/maps/dir/?api=1&destination=96,+TC+Palya+Main+Rd,+Brindavan+Layout,+TC+Palya,+Battarahalli,+Bengaluru,+Karnataka+560036"
};

export const DEFAULT_DEPARTMENTS: Department[] = [
  {
    id: "gen-med",
    name: "General Medicine & Diabetology",
    category: "clinical",
    description: "Comprehensive adult medical care, management of acute viral fevers, chronic hypertension, diabetes mellitus, respiratory illnesses, and preventive health screenings.",
    commonConditions: ["Diabetes Mellitus", "Hypertension", "Infectious Fevers", "Thyroid Disorders", "Asthma & Bronchitis"],
    opdTimings: "Daily: 9:00 AM - 1:30 PM & 5:00 PM - 9:00 PM",
    iconName: "Stethoscope"
  },
  {
    id: "obgyn",
    name: "Obstetrics & Gynaecology",
    category: "clinical",
    description: "Women's wellness across all life stages, antenatal checkups, safe delivery care, menstrual irregularites, PCOD/PCOS screening, and menopause support.",
    commonConditions: ["Antenatal & Postnatal Care", "PCOD / PCOS", "Menstrual Irregularities", "Infertility Workup", "Normal & Cesarean Delivery"],
    opdTimings: "Mon - Sat: 10:00 AM - 1:00 PM & 5:30 PM - 8:30 PM",
    iconName: "HeartHandshake"
  },
  {
    id: "paediatrics",
    name: "Paediatrics & Child Healthcare",
    category: "clinical",
    description: "Dedicated healthcare for infants, children, and adolescents including developmental monitoring, immunization, childhood infections, and pediatric emergency response.",
    commonConditions: ["Childhood Vaccinations", "Growth & Developmental Milestones", "Pediatric Respiratory Infections", "Nutritional Counseling"],
    opdTimings: "Mon - Sat: 9:30 AM - 1:00 PM & 6:00 PM - 9:00 PM",
    iconName: "Baby"
  },
  {
    id: "ortho",
    name: "Orthopaedics & Joint Care",
    category: "surgical",
    description: "Diagnosis and modern clinical treatment of bone fractures, osteoarthritis, spine & back pain, sports injuries, ligament tears, and joint stiffness.",
    commonConditions: ["Fractures & Dislocations", "Osteoarthritis & Knee Pain", "Cervical & Lumbar Spondylosis", "Sports Injuries & Sprains"],
    opdTimings: "Daily: 10:30 AM - 1:30 PM & 6:00 PM - 8:30 PM",
    iconName: "Activity"
  },
  {
    id: "gen-surgery",
    name: "General & Laparoscopic Surgery",
    category: "surgical",
    description: "Elective and emergency surgical procedures including laparoscopic hernia repair, appendectomy, gallbladder stones removal, anorectal surgeries, and wound care.",
    commonConditions: ["Appendicitis", "Hernia Repair (Open/Lap)", "Gallstones (Cholecystectomy)", "Piles, Fissure & Fistula", "Emergency Abdominal Trauma"],
    opdTimings: "Mon - Sat: 11:00 AM - 2:00 PM & On Call 24/7",
    iconName: "Scissors"
  },
  {
    id: "cardiology",
    name: "Cardiology & Cardiac Assessment",
    category: "clinical",
    description: "Preventive and diagnostic cardiac evaluations including resting ECG, 2D Echocardiography, cardiac biomarkers, and emergency stabilization of acute coronary conditions.",
    commonConditions: ["Chest Pain Evaluation", "Arrhythmias & Palpitations", "Ischemic Heart Disease Follow-up", "Preventive Cardiac Profiling"],
    opdTimings: "Consultation by Appointment & 24/7 Emergency Triage",
    iconName: "HeartPulse"
  },
  {
    id: "ent",
    name: "Ear, Nose & Throat (ENT)",
    category: "clinical",
    description: "Specialized assessment and medical/surgical management of chronic sinusitis, tonsillitis, ear infections, hearing loss, vertigo, and throat disorders.",
    commonConditions: ["Chronic Sinusitis & Rhinitis", "Tonsillitis & Adenoids", "Otitis Media & Ear Pain", "Tinnitus & Vertigo"],
    opdTimings: "Tue, Thu, Sat: 5:30 PM - 8:30 PM",
    iconName: "Ear"
  },
  {
    id: "emergency",
    name: "24/7 Emergency & Trauma Care",
    category: "emergency",
    description: "Round-the-clock emergency casualty care equipped with dedicated triage bays, critical resuscitation systems, emergency minor OT, and rapid ambulance support.",
    commonConditions: ["Acute Trauma & Road Accidents", "Severe Breathing Distress", "Acute Abdominal Pain", "High Grade Fevers & Seizures", "Cardiac Emergencies"],
    opdTimings: "Open 24 Hours / 7 Days a Week",
    iconName: "ShieldAlert"
  }
];

export const DEFAULT_DOCTORS: Doctor[] = [
  {
    id: "doc-1",
    name: "Senior Consultant Physician",
    designation: "General Medicine & Diabetology",
    departmentId: "gen-med",
    departmentName: "General Medicine & Diabetology",
    experience: "15+ Years Clinical Experience",
    languages: ["English", "Kannada", "Hindi", "Telugu"],
    opdSchedule: "Mon - Sat: 9:00 AM - 1:30 PM & 5:00 PM - 9:00 PM",
    about: "Specialized in comprehensive internal medicine, adult infectious disorders, metabolic management, and long-term diabetes control.",
    consultationRoom: "OPD Suite 101, First Floor"
  },
  {
    id: "doc-2",
    name: "Consultant Obstetrician & Gynaecologist",
    designation: "Obstetrics, Gynaecology & Women's Health",
    departmentId: "obgyn",
    departmentName: "Obstetrics & Gynaecology",
    experience: "12+ Years Clinical Experience",
    languages: ["English", "Kannada", "Hindi", "Tamil"],
    opdSchedule: "Mon - Sat: 10:00 AM - 1:00 PM & 5:30 PM - 8:30 PM",
    about: "Specialized in high-risk pregnancy monitoring, prenatal guidance, laparoscopic gynecological care, and adolescent women's health.",
    consultationRoom: "OPD Suite 104, First Floor"
  },
  {
    id: "doc-3",
    name: "Consultant Orthopaedic Surgeon",
    designation: "Orthopaedics, Trauma & Joint Care",
    departmentId: "ortho",
    departmentName: "Orthopaedics & Joint Care",
    experience: "14+ Years Clinical Experience",
    languages: ["English", "Kannada", "Hindi"],
    opdSchedule: "Mon - Sat: 10:30 AM - 1:30 PM & 6:00 PM - 8:30 PM",
    about: "Focused on complex fracture fixation, joint arthroplasty evaluations, degenerative spine management, and sports injury rehabilitation.",
    consultationRoom: "OPD Suite 106, First Floor"
  },
  {
    id: "doc-4",
    name: "Consultant Paediatrician",
    designation: "Paediatrics & Adolescent Health",
    departmentId: "paediatrics",
    departmentName: "Paediatrics & Child Healthcare",
    experience: "11+ Years Clinical Experience",
    languages: ["English", "Kannada", "Hindi", "Telugu"],
    opdSchedule: "Mon - Sat: 9:30 AM - 1:00 PM & 6:00 PM - 9:00 PM",
    about: "Specialized in infant wellness, timely immunization protocols, childhood infectious diseases, and pediatric urgent care.",
    consultationRoom: "OPD Suite 102, First Floor"
  },
  {
    id: "doc-5",
    name: "Consultant General & Laparoscopic Surgeon",
    designation: "General & Minimally Invasive Surgery",
    departmentId: "gen-surgery",
    departmentName: "General & Laparoscopic Surgery",
    experience: "13+ Years Clinical Experience",
    languages: ["English", "Kannada", "Hindi"],
    opdSchedule: "Mon - Sat: 11:00 AM - 2:00 PM (Emergency 24/7)",
    about: "Specialized in laparoscopic abdominal interventions, hernia repairs, appendix surgeries, gallbladder stones, and acute surgical emergencies.",
    consultationRoom: "Surgical Suite 108, First Floor"
  },
  {
    id: "doc-6",
    name: "Consultant Cardiologist & Physician",
    designation: "Cardiology & Clinical Assessment",
    departmentId: "cardiology",
    departmentName: "Cardiology & Cardiac Assessment",
    experience: "16+ Years Clinical Experience",
    languages: ["English", "Kannada", "Hindi"],
    opdSchedule: "Mon - Sat: 11:30 AM - 2:00 PM & On Call 24/7",
    about: "Expert in non-invasive cardiac diagnostics (ECG, 2D Echo), hypertension management, coronary risk assessment, and cardiac critical care.",
    consultationRoom: "Cardiology Wing, Ground Floor"
  }
];

export const DEFAULT_SERVICES: MedicalService[] = [
  {
    id: "srv-emergency",
    title: "24/7 Emergency & Casualty",
    shortDesc: "Immediate trauma response, continuous monitoring, and emergency triage backed by round-the-clock medical officers and nursing specialists.",
    availability: "Open 24/7",
    iconName: "ShieldAlert",
    features: ["Dedicated Trauma Bay", "Continuous Multi-para Monitoring", "Immediate Emergency Resuscitation", "On-site Triage"]
  },
  {
    id: "srv-icu",
    title: "Intensive Care Unit (ICU)",
    shortDesc: "High-dependency critical care unit equipped with mechanical ventilators, defibrillators, arterial blood gas analyzers, and central monitoring.",
    availability: "24 Hours Monitored",
    iconName: "HeartPulse",
    features: ["Advanced Invasive & Non-Invasive Ventilators", "1:1 Critical Care Nursing Ratio", "Central Oxygen & Suction", "Defibrillator & Crash Cart"]
  },
  {
    id: "srv-ot",
    title: "Modern Modular Operation Theatres",
    shortDesc: "Sterile surgical suites with laminar airflow, LED surgical illuminators, high-definition laparoscopy towers, and recovery bays.",
    availability: "Elective & 24/7 Emergency Surgeries",
    iconName: "Sparkles",
    features: ["Laminar Air Flow System", "HEPA Filtration & Strict Sterility", "HD Laparoscopy Surgical Towers", "Dedicated Post-Op Recovery"]
  },
  {
    id: "srv-lab",
    title: "In-House Diagnostic Laboratory",
    shortDesc: "Automated clinical biochemistry, hematology, clinical pathology, microbiology, and rapid fever profile testing with fast turnaround.",
    availability: "24 Hours Service",
    iconName: "FlaskConical",
    features: ["Automated Hematology Analyzers", "Clinical Biochemistry & Electrolytes", "Rapid Dengue, Malaria & Fever Panels", "Digital Report Delivery"]
  },
  {
    id: "srv-radiology",
    title: "Digital Radiology & Ultrasound",
    shortDesc: "Low-radiation high-resolution digital X-rays, Doppler ultrasound imaging, and diagnostic imaging for quick clinical confirmation.",
    availability: "Available Daily & 24/7 Emergency",
    iconName: "Scan",
    features: ["High-Frequency Digital X-Ray", "Color Doppler & Abdominal Ultrasound", "Emergency Bedside Portable X-Ray", "Immediate Radiologist Reports"]
  },
  {
    id: "srv-pharmacy",
    title: "24/7 In-House Pharmacy",
    shortDesc: "Fully stocked on-campus pharmacy offering genuine prescription medicines, surgical consumables, critical injections, and healthcare essentials.",
    availability: "Open 24 Hours",
    iconName: "Pill",
    features: ["100% Genuine Certified Medicines", "Emergency Injections & IV Fluids", "Surgical & Wound Dressings", "Direct Ward & Outpatient Access"]
  },
  {
    id: "srv-inpatient",
    title: "Inpatient Rooms & Daycare Wards",
    shortDesc: "Comfortable private single rooms, semi-private sharing rooms, and hygienic daycare observation beds with attached amenities.",
    availability: "Round-the-Clock Admission",
    iconName: "BedDouble",
    features: ["Private AC & Non-AC Rooms", "Motorized Adjustable Hospital Beds", "Nurse Call Alert Systems", "Dedicated Attendant Comfort"]
  },
  {
    id: "srv-ambulance",
    title: "24/7 Ambulance & Patient Transport",
    shortDesc: "Prompt emergency ambulance support for rapid transfer across Battarahalli, TC Palya, KR Puram, and nearby Bengaluru East neighborhoods.",
    availability: "24/7 Dispatch: 099026 47768",
    iconName: "Ambulance",
    features: ["Oxygen Cylinder & Resuscitation Kit", "Trained Emergency Medical Technician", "Stretcher & Wheelchair Accessibility", "Direct Casualty Handover"]
  }
];

export const DEFAULT_FACILITIES: Facility[] = [
  {
    id: "fac-1",
    title: "24/7 Emergency & Trauma Casualty",
    description: "Fully prepared for rapid-response resuscitation, accident trauma, acute fevers, and medical emergencies with direct ambulance bay access.",
    imageUrl: "/src/assets/images/facility_emergency_care_1790255704396.jpg",
    highlight: "24/7 Ready with On-Duty Doctors"
  },
  {
    id: "fac-2",
    title: "State-of-the-Art Operation Suites",
    description: "Modular surgical theatres adhering to strict infection-control standards, equipped for general, laparoscopic, orthopedic, and obstetrical procedures.",
    imageUrl: "/src/assets/images/facility_operation_theater_1790255717971.jpg",
    highlight: "Sterile Laminar Airflow & Laparoscopy"
  },
  {
    id: "fac-3",
    title: "Advanced Radiology & Pathology Center",
    description: "Integrated diagnostic wing offering digital radiography, ultrasound imaging, and clinical laboratory testing for timely medical decisions.",
    imageUrl: "/src/assets/images/facility_radiology_lab_1790255729318.jpg",
    highlight: "Fast & Accurate Diagnostic Reports"
  },
  {
    id: "fac-4",
    title: "Comfortable Inpatient & Recovery Rooms",
    description: "Patient-centered recovery rooms designed with natural lighting, ergonomic motorized beds, nurse alert systems, and clean family visitor spaces.",
    imageUrl: "/src/assets/images/facility_inpatient_ward_1790255739991.jpg",
    highlight: "Clean, Quiet & Healing Environment"
  }
];

// Helper functions for localStorage sync to fulfill staff editing capability
const STORAGE_KEYS = {
  DEPARTMENTS: 'healthplus_departments',
  DOCTORS: 'healthplus_doctors',
  SERVICES: 'healthplus_services',
  CONFIG: 'healthplus_config',
  APPOINTMENTS: 'healthplus_appointments'
};

export const getStoredDepartments = (): Department[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.DEPARTMENTS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to load departments from storage", e);
  }
  return DEFAULT_DEPARTMENTS;
};

export const saveStoredDepartments = (deps: Department[]) => {
  try {
    localStorage.setItem(STORAGE_KEYS.DEPARTMENTS, JSON.stringify(deps));
  } catch (e) {
    console.error("Failed to save departments", e);
  }
};

export const getStoredDoctors = (): Doctor[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.DOCTORS);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to load doctors from storage", e);
  }
  return DEFAULT_DOCTORS;
};

export const saveStoredDoctors = (docs: Doctor[]) => {
  try {
    localStorage.setItem(STORAGE_KEYS.DOCTORS, JSON.stringify(docs));
  } catch (e) {
    console.error("Failed to save doctors", e);
  }
};

export const getStoredConfig = (): HospitalConfig => {
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.CONFIG);
    if (raw) return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to load config from storage", e);
  }
  return DEFAULT_HOSPITAL_CONFIG;
};

export const saveStoredConfig = (config: HospitalConfig) => {
  try {
    localStorage.setItem(STORAGE_KEYS.CONFIG, JSON.stringify(config));
  } catch (e) {
    console.error("Failed to save config", e);
  }
};

export const resetHospitalDataToDefaults = () => {
  localStorage.removeItem(STORAGE_KEYS.DEPARTMENTS);
  localStorage.removeItem(STORAGE_KEYS.DOCTORS);
  localStorage.removeItem(STORAGE_KEYS.SERVICES);
  localStorage.removeItem(STORAGE_KEYS.CONFIG);
};
