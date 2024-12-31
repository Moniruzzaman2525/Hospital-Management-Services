import mongoose from "mongoose";
import { TPatient } from "../patient/patient.interface";
import { Patient } from "../patient/patient.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generatePatientId } from "./user.utils";



const createPatientIntoDB = async (password: string, payload: TPatient) => {
    const userData: Partial<TUser> = {}
    userData.password = password
    userData.role = 'patient'
    userData.email = payload.email
    const session = await mongoose.startSession()
    try {
        session.startTransaction()

        const userId = await generatePatientId()

        userData.id = userId

        const newUser = await User.create(userData)
        
        payload.user = newUser._id
        payload.id = userId
        
        const result = await Patient.create(payload)
        
        await session.commitTransaction()
        await session.endSession()
        return result
    } catch (error) {
        console.log(error);
        await session.abortTransaction()
        await session.endSession()
        
    }

}


export const userServices = {
    createPatientIntoDB
}