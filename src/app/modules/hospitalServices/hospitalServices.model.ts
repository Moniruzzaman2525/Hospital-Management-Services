import { Schema, model } from "mongoose";
import { THospitalServices } from "./hospitalServices.interface";



const hospitalServicesSchema = new Schema<THospitalServices>({
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