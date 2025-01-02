

import express from 'express'
import { servicesController } from './Services.controller'
import validateRequest from '../../middleware/validateRequest'
import { createServicesValidationSchema, updateServicesValidationSchema } from './services.validation'

const router = express.Router()
router.post('/create-services', validateRequest(createServicesValidationSchema), servicesController.createServicesController)
router.get('/get-services', servicesController.getServicesController)
router.get('/get-services/:id', servicesController.getSingleServicesController)
router.patch('/up date-services/:id', validateRequest(updateServicesValidationSchema), servicesController.updateSingleServicesController)

export const servicesRouter = router