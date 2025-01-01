import { model, Schema } from "mongoose";
import { contactInfoSchema } from "../../interface/contactInfo";
import { TAdmin } from "./admin.interface";


const adminSchema = new Schema<TAdmin>({
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
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: [true, 'Gender is required'],
    }
})


export const Admin = model<TAdmin>('Admin', adminSchema)