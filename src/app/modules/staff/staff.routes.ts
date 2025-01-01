
import express from 'express'
import { StaffController } from './staff.controllers'
import validateRequest from '../../middleware/validateRequest'
import { updateStaffValidationSchema } from './staff.validation'

const router = express.Router()

router.get('/get-staff', StaffController.getStaffController)
router.get('/get-staff/:id', StaffController.getSingleStaffController)
router.patch('/update-staff/:id', validateRequest(updateStaffValidationSchema), StaffController.updateStaffController)

export const staffRouter = router