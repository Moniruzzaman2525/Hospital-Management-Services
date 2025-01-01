import { Types } from "mongoose";
import { TContactInfo } from "../../interface/contactInfo";



export type TAdmin = {
    id: string;
    user: Types.ObjectId;
    bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-';
    name: string;
    dateOfBirth?: Date;
    gender: 'Male' | 'Female'
    contactInfo: TContactInfo;
    email: string;
    image?: string
}