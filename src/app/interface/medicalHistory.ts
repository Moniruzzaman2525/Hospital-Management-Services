import { Schema } from "mongoose";
import { z } from "zod";

export type TMedicalHistory = {
    condition: string;
    notes?: string;
    date: Date
}

export const medicalHistoryValidation  = z.object({
    condition: z.string(),
    notes: z.string().optional(),
    date: z.string()
})

export const medicalHistorySchema = new Schema<TMedicalHistory>({
    condition: {
        type: String
    },
    notes: {
        type: String,
    },
    date: {
        type: Date,
        required: true
    }
})