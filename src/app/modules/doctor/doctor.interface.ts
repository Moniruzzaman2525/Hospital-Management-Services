import { TContactInfo } from "../../interface/contactInfo";


export type TDoctor = {
    name: string;
    specialization: string;
    availability: {
        days: string;
        timeSlot: string
    };
    contactInfo: TContactInfo;
    email: string;
    image: string
}