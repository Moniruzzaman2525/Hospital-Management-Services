

import express from 'express'
import { adminController } from './admin.controller'
import validateRequest from '../../middleware/validateRequest'
import { updateAdminValidationSchema } from './admin.validation'

const router = express.Router()

router.get('/get-admin', adminController.getAdminController)
router.get('/get-admin/:id', adminController.getSingleAdminController)
router.patch('/update-admin/:id',validateRequest(updateAdminValidationSchema),  adminController.updateAdminController)

export const adminRouter = router