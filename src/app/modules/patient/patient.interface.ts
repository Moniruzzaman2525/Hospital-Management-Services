import { Types } from "mongoose";
import { TContactInfo } from "../../interface/contactInfo";
import { TMedicalHistory } from "../../interface/medicalHistory";
import { TAppointment } from "../appointment/appointment.interface";
import { TServices } from "../Services/Services.interface";

export type TPatient = {
    id: string;
    name: string;
    user: Types.ObjectId;
    dateOfBirth: string;
    gender: 'Male' | 'Female';
    email: string;
    image?: string;
    contactInfo: TContactInfo;
    medicalHistory: TMedicalHistory;
    appointments?: TAppointment;
    hospitalServices?: TServices;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
}