import catchAsync from "../../utils/catchAsync";
import { appointmentServices } from "./appointment.services";


const bookingAppointmentController = catchAsync(async (req, res) => {
    const {appointment: appointmentData} = req.body
    const result = appointmentServices.bookAppointmentServices(appointmentData)
})

export const appointmentController = {
    bookingAppointmentController
}