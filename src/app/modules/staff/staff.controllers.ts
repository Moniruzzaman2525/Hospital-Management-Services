import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { staffServices } from "./staff.services";


const getStaffController = catchAsync(async (req, res) => {
    const result = await staffServices.getStaffFromDB()
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Staff retrieve successfully',
        data: result
    })
})
const getSingleStaffController = catchAsync(async (req, res) => {
    const id = req.params.id
    
    const result = await staffServices.getSingleStaffFromDB(id)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Staff retrieve successfully',
        data: result
    })
})
const updateStaffController = catchAsync(async (req, res) => {
    const id = req.params.id
    const {staff: updateStaffData} = req.body
    
    const result = await staffServices.updateStaffFromDB(id, updateStaffData)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Staff retrieve successfully',
        data: result
    })
})

export const StaffController = {
    getStaffController, getSingleStaffController, updateStaffController
}