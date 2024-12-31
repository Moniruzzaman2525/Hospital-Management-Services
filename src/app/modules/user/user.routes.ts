

import express from 'express'
import { userController } from './user.controller'
import validateRequest from '../../middleware/validateRequest'
import { userValidation } from './user.validation'
import { createPatientValidationSchema } from '../patient/patient.validation'

const router = express.Router()

router.post('/create-patient', validateRequest(createPatientValidationSchema), userController.createPatient)

export const UserRoutes = router