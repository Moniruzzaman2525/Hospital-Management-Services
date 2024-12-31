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
    name: string;
    specialization: string;
    availability: TAvailability;
    contactInfo: TContactInfo;
    email: string;
    image?: string
}