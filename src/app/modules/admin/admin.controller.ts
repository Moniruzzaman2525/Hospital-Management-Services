import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { adminServices } from "./admin.services";

const getAdminController = catchAsync(async(req, res) => {
    const result = await adminServices.getAdminFromDB()
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Staff retrieve successfully',
        data: result
    })
})
const getSingleAdminController = catchAsync(async(req, res) => {
    const id = req.params.id
    const result = await adminServices.getSingleAdminFromDB(id)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Staff retrieve successfully',
        data: result
    })
})
const updateAdminController = catchAsync(async(req, res) => {
    const id = req.params.id
    const {admin: adminData} = req.body
    const result = await adminServices.updateAdminFromDB(id, adminData)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'update doctor successfully',
        data: result
    })
})

export const adminController = {
    getAdminController, getSingleAdminController, updateAdminController
}
