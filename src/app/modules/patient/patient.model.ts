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
    user: {
        type: Schema.Types.ObjectId,
        required: [true, 'User id is required'],
        unique: true,
        ref: 'User',
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    bloodGroup: {
        type: String,
        enum: {
            values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            message: '{VALUE} is not a valid blood group',
        },
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    image: {
        type: String,
    },
    dateOfBirth: {
        type: String,
        required: true,
    },
    contactInfo: contactInfoSchema,
    medicalHistory: medicalHistorySchema,
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: [true, 'Gender is required'],
    },
})


export const Patient = model<TPatient>("Patient", patientSchema)