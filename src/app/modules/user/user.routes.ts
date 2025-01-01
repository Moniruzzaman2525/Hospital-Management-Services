

import express from 'express'
import { userController } from './user.controller'
import validateRequest from '../../middleware/validateRequest'
import { createPatientValidationSchema } from '../patient/patient.validation'
import { createDoctorValidationSchema } from '../doctor/doctor.validation'
import { createAdminValidationSchema } from '../admin/admin.validation'
import { createStaffValidationSchema } from '../staff/staff.validation'

const router = express.Router()

router.post('/create-patient', validateRequest(createPatientValidationSchema), userController.createPatient)
router.post('/create-doctor', validateRequest(createDoctorValidationSchema), userController.createDoctor)
router.post('/create-admin', validateRequest(createAdminValidationSchema), userController.createAdmin)
router.post('/create-staff', validateRequest(createStaffValidationSchema), userController.createStaff)

export const UserRoutes = router