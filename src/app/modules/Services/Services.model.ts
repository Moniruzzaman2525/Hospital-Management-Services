import { Schema, model } from "mongoose";
import { THospitalServices } from "./Services.interface";



const hospitalServicesSchema = new Schema<THospitalServices>({
    serviceName: {
        type: String,
        required: [true, 'Name is required']
    },
    servicesData: {
        type: Date,
        required: [true, "Service date is required"],
    },
    description: {
        type: String,
    },
    serviceCost: {
        type: Number,
        required: [true, 'Cost is required']
    }
})

export const hospitalServices = model<THospitalServices>("HospitalServices", hospitalServicesSchema)