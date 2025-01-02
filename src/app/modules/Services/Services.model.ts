import { Schema, model } from "mongoose";
import { TServices } from "./Services.interface";



export const servicesSchema = new Schema<TServices>({
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

