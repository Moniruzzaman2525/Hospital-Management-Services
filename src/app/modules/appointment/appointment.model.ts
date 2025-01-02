import { model, Schema } from "mongoose";
import { TAppointment } from "./appointment.interface";

const appointmentSchema = new Schema<TAppointment>({
    id: {
        type: String,
        required: [true, 'Name is required'],
        unique: true
    },
    time: {
        type: String,
        required: [true, "Appointment time is required"],
      },
      reason: {
        type: String,
        required: [true, 'Description is required'],
    },
    cost: {
        type: String,
        required: [true, 'Cost is required']
    },
    doctor: {
        type: Schema.ObjectId,
        ref: 'Doctor'
    },
    patient: {
        type: Schema.ObjectId,
        ref: 'Patient'
    },
})

export const Appointment = model<TAppointment>("Appointment", appointmentSchema)