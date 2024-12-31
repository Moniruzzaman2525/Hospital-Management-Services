import { TContactInfo } from "../../interface/contactInfo";
import { TMedicalHistory } from "../../interface/medicalHistory";

export type TPatient = {
    id: string;
    name: string;
    age: string;
    gender: string;
    email: string;
    image?: string;
    contactInfo: TContactInfo;
    medicalHistory: TMedicalHistory,
}