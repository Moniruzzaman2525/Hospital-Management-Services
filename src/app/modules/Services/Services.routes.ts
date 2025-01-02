

import express from 'express'
import { servicesController } from './Services.controller'

const router = express.Router()
router.post('/create-services', servicesController.createServicesController)

export const servicesRouter = router