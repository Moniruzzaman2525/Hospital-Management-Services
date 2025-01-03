import { Appointment } from "./appointment.model"


const bookAppointmentServices = async () => {
    const result = await Appointment.create()
}