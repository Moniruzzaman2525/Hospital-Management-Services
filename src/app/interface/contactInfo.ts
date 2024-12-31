import { Schema } from "mongoose";


export type TContactInfo = {
    phone: string;
    address: string
}

export const contactInfoSchema = new Schema<TContactInfo>({
    phone: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})