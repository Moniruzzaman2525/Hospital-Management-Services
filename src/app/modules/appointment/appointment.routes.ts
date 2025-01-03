

import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { appointmentController } from './appointment.contollers'

const router = express.Router()

router.post('/book-appointment', appointmentController.bookingAppointmentController)


export const appointmentRoute = router