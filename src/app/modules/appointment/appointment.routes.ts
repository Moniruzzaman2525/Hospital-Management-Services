

import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { appointmentController } from './appointment.controller'
import { bookAppointmentValidationSchema } from './appointment.validation'

const router = express.Router()

router.post('/book-appointment', validateRequest(bookAppointmentValidationSchema), appointmentController.bookingAppointmentController)


export const appointmentRoute = router