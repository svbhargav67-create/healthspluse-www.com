export interface Department {
  id: string;
  name: string;
  description: string;
  category: 'clinical' | 'surgical' | 'emergency' | 'support';
  commonConditions: string[];
  opdTimings: string;
  iconName: string;
}

export interface Doctor {
  id: string;
  name: string;
  designation: string;
  departmentId: string;
  departmentName: string;
  experience: string;
  languages: string[];
  opdSchedule: string;
  about: string;
  consultationRoom: string;
  photoUrl?: string;
}

export interface MedicalService {
  id: string;
  title: string;
  shortDesc: string;
  availability: string;
  iconName: string;
  features: string[];
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  highlight: string;
}

export interface AppointmentRequest {
  id: string;
  referenceNumber: string;
  patientName: string;
  phoneNumber: string;
  email: string;
  departmentId: string;
  departmentName: string;
  doctorId?: string;
  doctorName?: string;
  preferredDate: string;
  preferredTime: string;
  message?: string;
  status: 'Received' | 'Confirmed' | 'Completed';
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface HospitalConfig {
  name: string;
  address: string;
  phone: string;
  phoneRaw: string;
  whatsappNumber: string;
  emergencyPhone: string;
  timing: string;
  locationArea: string;
  city: string;
  pincode: string;
  googleMapsDirectionsUrl: string;
}
