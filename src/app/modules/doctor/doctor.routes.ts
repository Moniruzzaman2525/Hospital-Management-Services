
import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { doctorController } from './doctor.controller'
import { updateDoctorValidationSchema } from './doctor.validation'

const router = express.Router()

router.get('/get-doctor', doctorController.getDoctorController)
router.get('/get-doctor/:id', doctorController.getSingleDoctorController)
router.patch('/update-doctor/:id',validateRequest(updateDoctorValidationSchema),  doctorController.updateDoctorController)

export const doctorRouter = router