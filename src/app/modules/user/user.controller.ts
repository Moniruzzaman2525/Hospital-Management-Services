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


export const userController = {
    createPatient,
    createDoctor
}