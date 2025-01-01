import { Types } from "mongoose";
import { TContactInfo } from "../../interface/contactInfo";


export type TAvailability = {
    days: string;
    timeSlot: {
        start: string,
        end: string
    }
}

export type TDoctor = {
    id: string;
    user: Types.ObjectId;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    name: string;
    specialization: string;
    availability: TAvailability;
    dateOfBirth?: Date;
    gender: 'Male' | 'Female'
    contactInfo: TContactInfo;
    email: string;
    image?: string
}