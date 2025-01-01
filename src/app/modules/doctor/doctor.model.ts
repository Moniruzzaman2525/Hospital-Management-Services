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
    user: {
        type: Schema.Types.ObjectId,
        required: [true, 'User id is required'],
        unique: true,
        ref: 'User',
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
    bloodGroup: {
        type: String,
        enum: {
            values: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
            message: '{VALUE} is not a valid blood group',
        },
    },
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
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: [true, 'Gender is required'],
    }
})


export const Doctor = model<TDoctor>('Doctor', doctorSchema)