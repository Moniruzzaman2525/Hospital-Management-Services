import { TContactInfo } from "../../interface/contactInfo";


export type TMedicalHistory = {
    condition: string;
    notes: string;
    date: Date
}

export type TPatient = {
    name: string;
    age: string;
    gender: string;
    email: string;
    image: string;
    contactInfo: TContactInfo;
    medicalHistory: TMedicalHistory
}