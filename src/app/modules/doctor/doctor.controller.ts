import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { doctorServices } from "./doctor.services";


const getDoctorController = catchAsync(async(req, res) => {
    const result = await doctorServices.getDoctorFromDB()
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Staff retrieve successfully',
        data: result
    })
})
const getSingleDoctorController = catchAsync(async(req, res) => {
    const id = req.params.id
    const result = await doctorServices.getSingleDoctorFromDB(id)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Staff retrieve successfully',
        data: result
    })
})
const updateDoctorController = catchAsync(async(req, res) => {
    const id = req.params.id
    const {doctor: doctorData} = req.body
    const result = await doctorServices.updateDoctorFromDB(id, doctorData)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'update doctor successfully',
        data: result
    })
})

export const doctorController = {
    getDoctorController, getSingleDoctorController, updateDoctorController
}
