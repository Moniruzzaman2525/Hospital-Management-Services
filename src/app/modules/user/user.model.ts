import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";


const userSchema = new Schema<TUser>({
    id: {
        type: String,
        required: [true, 'Id is required'],
        unique: true
    },
    role: {
        type: String,
        enum: ['doctor', 'patient', 'staff']
    },
    password: {
        type: String,
        required: [true, 'Password is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    status: {
        type: String,
        enum: ['in-progress', 'blocked'],
        default: 'in-progress'
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})


export const User = model<TUser>('User', userSchema)