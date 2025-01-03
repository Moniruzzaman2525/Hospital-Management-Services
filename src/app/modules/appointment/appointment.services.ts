import { TAppointment } from "./appointment.interface"
import { Appointment } from "./appointment.model"


const bookAppointmentServices = async (payload: TAppointment) => {
    const result = await Appointment.create(payload)
    return result
}


export const appointmentServices = {
    bookAppointmentServices
}