import { Schema } from "mongoose";

export type TMedicalHistory = {
    condition: string;
    notes?: string;
    date: Date
}


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