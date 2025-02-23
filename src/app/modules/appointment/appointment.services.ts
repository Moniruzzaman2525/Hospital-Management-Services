import AppError from "../../errors/AppError"
import { Doctor } from "../doctor/doctor.model"
import { TAppointment } from "./appointment.interface"
import { Appointment } from "./appointment.model"
import { generateAppointmentId } from "./appointment.utils"


const bookAppointmentServices = async (payload: TAppointment) => {
    const appointmentId = await generateAppointmentId()
    const isDoctorExist = await Doctor.findOne({ id: payload.id })
    if (!isDoctorExist) {
        throw new AppError(404, 'Doctor not found 😥')
    }
    payload.id = appointmentId
    const result = await Appointment.create(payload)
    return result
}


export const appointmentServices = {
    bookAppointmentServices
}