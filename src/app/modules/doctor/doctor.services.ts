import { TDoctor } from "./doctor.interface"
import { Doctor } from "./doctor.model"


const getDoctorFromDB = async () => {
    const result = await Doctor.find({}).populate('user')
    return result
}
const getSingleDoctorFromDB = async (id: string) => {
    const result = await Doctor.findOne({id}).populate('user')
    return result
}
const updateDoctorFromDB = async (id: string, payload: Partial<TDoctor>) => {
    const result = await Doctor.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    
    return result;
}
export const doctorServices = {
    getDoctorFromDB, getSingleDoctorFromDB, updateDoctorFromDB
}