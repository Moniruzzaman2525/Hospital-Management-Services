

import express from 'express'
import { userController } from './user.contollers'
import validateRequest from '../../middleware/validateRequest'
import { userValidation } from './user.validation'

const router = express.Router()

router.post('/create-patient', validateRequest(userValidation.userValidationSchema), userController.createPatient)