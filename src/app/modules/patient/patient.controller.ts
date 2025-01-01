import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { patientServices } from "./patient.services";


const getPatientController = catchAsync(async(req, res) => {
    const result = await patientServices.getPatientFromDB()
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Staff retrieve successfully',
        data: result
    })
})
const getSinglePatientController = catchAsync(async(req, res) => {
    const id = req.params.id
    const result = await patientServices.getSinglePatientFromDB(id)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Staff retrieve successfully',
        data: result
    })
})
const updatePatientController = catchAsync(async(req, res) => {
    const id = req.params.id
    const {patient: patientData} = req.body
    const result = await patientServices.updatePatientFromDB(id, patientData)
    sendResponse(res, {
        statusCode: 201,
        success: true,
        message: 'Staff retrieve successfully',
        data: result
    })
})

export const patientController = {
    getPatientController, getSinglePatientController, updatePatientController
}