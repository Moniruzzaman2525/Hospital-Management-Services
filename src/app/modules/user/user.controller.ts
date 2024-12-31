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
        data: result
    })
})

export const userController = {
    createPatient
}