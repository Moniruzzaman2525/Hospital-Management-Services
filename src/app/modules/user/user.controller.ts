import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { userServices } from "./user.services";

const createPatient = catchAsync(async (req, res) => {
    const { password, patient: patientData } = req.body
    const result = await userServices.createPatientIntoDB(password, patientData)
    
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Patient create successfully',
        data: result[0]
    })
})
const createDoctor = catchAsync(async(req, res) => {
    const {password, doctor: doctorData} = req.body

    const result = await userServices.createDoctorIntoDB(password, doctorData)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Doctor create successfully',
        data: result[0]
    })
})
const createAdmin = catchAsync(async(req, res) => {
    const {password, admin: adminData} = req.body

    const result = await userServices.createAdminIntoDB(password, adminData)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Admin create successfully',
        data: result[0]
    })
})
const createStaff = catchAsync(async(req, res) => {
    const {password, staff: staffData} = req.body

    const result = await userServices.createStaffIntoDB(password, staffData)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Staff create successfully',
        data: result[0]
    })
})


export const userController = {
    createPatient,
    createDoctor,
    createAdmin,
    createStaff
}