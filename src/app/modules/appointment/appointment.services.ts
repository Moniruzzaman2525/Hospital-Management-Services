import { TAppointment } from "./appointment.interface"
import { Appointment } from "./appointment.model"
import { generateAppointmentId } from "./appointment.utils"


const bookAppointmentServices = async (payload: TAppointment) => {

    

    const appointmentId = await generateAppointmentId()
    payload.id = appointmentId
    const result = await Appointment.create(payload)
    return result
}


export const appointmentServices = {
    bookAppointmentServices
}