

import express from 'express'
import { servicesController } from './Services.controller'

const router = express.Router()
router.post('/create-services', servicesController.createServicesController)
router.get('/get-services', servicesController.getServicesController)

export const servicesRouter = router