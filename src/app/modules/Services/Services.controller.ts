import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { services } from "./Services.services"



const createServicesController = catchAsync(async(req, res) => {
    const {services: servicesData} = req.body

    const result = await services.createServicesIntoDB(servicesData)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Services create successfully',
        data: result
    })
})
const getServicesController = catchAsync(async(req, res) => {
    const result = await services.getServicesFromDB()
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Services retrieve successfully',
        data: result
    })
})
const getSingleServicesController = catchAsync(async(req, res) => {
    const id = req.params.id
    const result = await services.getSingleServicesFromDB(id)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Services retrieve successfully',
        data: result
    })
})
const updateSingleServicesController = catchAsync(async(req, res) => {
    const id = req.params.id
    const {services: servicesData} = req.body
    const result = await services.updatePatientFromDB(id, servicesData)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Services update successfully',
        data: result
    })
})


export const servicesController = {
    createServicesController, getServicesController, getSingleServicesController, updateSingleServicesController
}