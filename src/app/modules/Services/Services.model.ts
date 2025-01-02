import { Schema, model } from "mongoose";
import { THospitalServices } from "./Services.interface";



const hospitalServicesSchema = new Schema<THospitalServices>({
    id: {
        type: String,
        required: [true, 'Id is required'],
        unique: true
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    image: {
        type: String,
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    cost: {
        type: String,
        required: [true, 'Cost is required']
    }
})

export const hospitalServices = model<THospitalServices>("HospitalServices", hospitalServicesSchema)