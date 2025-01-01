

import express from 'express'
import { patientController } from './patient.controller'
import validateRequest from '../../middleware/validateRequest'
import { updatePatientValidationSchema } from './patient.validation'

const router = express.Router()

router.get('/get-patient', patientController.getPatientController)
router.get('/get-patient/:id', patientController.getSinglePatientController)
router.patch('/update-patient/:id',validateRequest(updatePatientValidationSchema),  patientController.updatePatientController)


export const patientRouter = router