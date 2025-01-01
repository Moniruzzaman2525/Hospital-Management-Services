import { Types } from "mongoose";
import { TContactInfo } from "../../interface/contactInfo";



export type TStaff = {
    id: string;
    user: Types.ObjectId;
    name: string;
    salary: string;
    email:string;
    contactInfo: TContactInfo;
    image?: string
}