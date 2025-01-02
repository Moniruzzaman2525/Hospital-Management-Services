import catchAsync from "../../utils/catchAsync"
import sendResponse from "../../utils/sendResponse"
import { services } from "./Services.services"


const createStaff = catchAsync(async(req, res) => {
    const {services: servicesData} = req.body

    const result = await services.createServicesIntoDB(servicesData)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Staff create successfully',
        data: result
    })
})
