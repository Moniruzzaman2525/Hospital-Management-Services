import { TContactInfo } from "../../interface/contactInfo";



export type TUser = {
    id: string;
    role: 'doctor' | 'patient' | 'staff';
    password: string;
    email: string;
    status: 'in-progress' | 'blocked';
    isDeleted: boolean
}