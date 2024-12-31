import { Schema } from "mongoose";
import { z } from "zod";


export type TContactInfo = {
    phone: string;
    address: string
}

export const contactInfoValidation  = z.object( {
    phone: z.string(),
    address: z.string()
})

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