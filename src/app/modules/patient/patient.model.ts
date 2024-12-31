import { model, Schema } from "mongoose";
import { TPatient } from "./patient.interface";
import { contactInfoSchema } from "../../interface/contactInfo";
import { medicalHistorySchema } from "../../interface/medicalHistory";


const patientSchema = new Schema<TPatient>({
    id: {
        type: String,
        unique: true,
        required: [true, "Id is required"]
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    image: {
        type: String,
    },
    age: {
        type: String,
        required: true,
    },
    contactInfo: contactInfoSchema,
    medicalHistory: medicalHistorySchema,
})


export const Patient = model<TPatient>("Patient", patientSchema)