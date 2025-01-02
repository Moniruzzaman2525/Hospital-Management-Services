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


export const servicesController = {
    createServicesController
}