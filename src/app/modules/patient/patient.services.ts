import { TPatient } from "./patient.interface"
import { Patient } from "./patient.model"


const getPatientFromDB = async () => {
    const allPatientData = await Patient.find({}).populate('user')

    return allPatientData
}
const getSinglePatientFromDB = async (id: string) => {
    const allPatientData = await Patient.findOne({id}).populate('user')

    return allPatientData
}

const updatePatientFromDB = async (id: string, payload: Partial<TPatient>) => {
    const result = await Patient.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    
    return result;
}

export const patientServices = {
    getPatientFromDB , getSinglePatientFromDB, updatePatientFromDB
}