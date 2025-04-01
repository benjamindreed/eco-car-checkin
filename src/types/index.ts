export interface Appointment {
    id: string;
    customerName: string;
    customerContact: string;
    vehicleMake: string;
    vehicleModel: string;
    vehicleSizeVariant: string;
    appointmentDate: string;
    appointmentTime: string;
}

export interface CustomerDetails {
    name: string;
    contact: string;
    vehicleMake: string;
    vehicleModel: string;
    vehicleSizeVariant: string;
}

export interface TermsOfServiceAgreement {
    accepted: boolean;
    dateAccepted: string;
}