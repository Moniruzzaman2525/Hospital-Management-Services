import { model, Schema } from "mongoose";
import { TStaff } from "./staff.interface";
import { contactInfoSchema } from "../../interface/contactInfo";


const staffSchema = new Schema<TStaff>({
    id: {
        type: String,
        unique: true,
        required: [true, "Id is required"]
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    salary: {
        type: String,
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
})


export const Staff = model<TStaff>("Staff", staffSchema)