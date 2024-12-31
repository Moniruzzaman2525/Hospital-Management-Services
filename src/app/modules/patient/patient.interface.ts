import { Types } from "mongoose";
import { TContactInfo } from "../../interface/contactInfo";
import { TMedicalHistory } from "../../interface/medicalHistory";

export type TPatient = {
    id: string;
    name: string;
    user: Types.ObjectId;
    age: string;
    gender: string;
    email: string;
    image?: string;
    contactInfo: TContactInfo;
    medicalHistory: TMedicalHistory,
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
}