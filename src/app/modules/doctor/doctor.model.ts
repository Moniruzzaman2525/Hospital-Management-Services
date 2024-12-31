import { model, Schema } from "mongoose";
import { TDoctor } from "./doctor.interface";
import { contactInfoSchema } from "../../interface/contactInfo";


const doctorSchema = new Schema<TDoctor>({
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
    specialization: {
        type: String,
        required: [true, 'Specialization is required'],
        unique: true
    },
    image: {
        type: String,
    },
    contactInfo: contactInfoSchema,
    availability: {
        days: {
            type: String,
            required: [true, 'days is required'],
        },
        timeSlot: {
            start: {
                type: String,
                required: true
            },
            end: {
                type: String,
                require: true
            }
        }
    }
})


export const Doctor = model<TDoctor>('Doctor', doctorSchema)