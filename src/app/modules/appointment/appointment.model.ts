import { model, Schema } from "mongoose";
import { TAppointment } from "./appointment.interface";



export const appointmentSchema = new Schema<TAppointment>({
    date: {
        type: Date,
        required: [true, "Appointment date is required"],
    },
    time: {
        type: String,
        required: [true, "Appointment time is required"],
    },
    reason: {
        type: String,
    },
    cost: {
        type: String,
        required: [true, 'Cost is required']
    },
    doctor: {
        type: Schema.ObjectId,
        ref: 'Doctor',
        required: [true, "Doctor is required"],
    }
})


