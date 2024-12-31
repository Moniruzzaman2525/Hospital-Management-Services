import { TContactInfo } from "../../interface/contactInfo";



export type TStaff = {
    id: string;
    name: string;
    salary: string;
    email:string;
    contactInfo: TContactInfo;
    image?: string
}