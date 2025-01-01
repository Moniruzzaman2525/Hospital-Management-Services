import mongoose from "mongoose";
import { TPatient } from "../patient/patient.interface";
import { Patient } from "../patient/patient.model";
import { TUser } from "./user.interface";
import { User } from "./user.model";
import { generateAdminId, generateDoctorId, generatePatientId } from "./user.utils";
import AppError from "../../errors/AppError";
import { TDoctor } from "../doctor/doctor.interface";
import { Doctor } from "../doctor/doctor.model";
import { TAdmin } from "../admin/admin.interface";
import { Admin } from "../admin/admin.model";

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

        const newUser = await User.create([userData], { session })
        if (!newUser.length) {
            await session.abortTransaction();
            await session.endSession();
            throw new AppError(400, 'Patient create failed')
        }

        payload.user = newUser[0]._id
        payload.id = userId

        const result = (await Patient.create([payload], { session }))
        if (!result.length) {
            await session.abortTransaction();
            await session.endSession();
            throw new AppError(400, 'Patient create failed')
        }
        await session.commitTransaction()
        await session.endSession()
        return result
    } catch (error: any) {
        await session.abortTransaction()
        await session.endSession()
        throw new Error(error)

    }

}
const createDoctorIntoDB = async (password: string, payload: TDoctor) => {
    const userData: Partial<TUser> = {}
    userData.password = password
    userData.role = 'doctor'
    userData.email = payload.email
    const session = await mongoose.startSession()
    try {
        session.startTransaction()

        const userId = await generateDoctorId()

        userData.id = userId

        const newUser = await User.create([userData], { session })
        if (!newUser.length) {
            await session.abortTransaction();
            await session.endSession();
            throw new AppError(400, 'Doctor create failed')
        }

        payload.user = newUser[0]._id
        payload.id = userId

        const result = (await Doctor.create([payload], { session }))
        if (!result.length) {
            await session.abortTransaction();
            await session.endSession();
            throw new AppError(400, 'Doctor create failed')
        }
        await session.commitTransaction()
        await session.endSession()
        return result
    } catch (error: any) {
        await session.abortTransaction()
        await session.endSession()
        throw new Error(error)

    }

}
const createAdminIntoDB = async (password: string, payload: TAdmin) => {
    const userData: Partial<TUser> = {}
    userData.password = password
    userData.role = 'admin'
    
    userData.email = payload.email
    const session = await mongoose.startSession()
    try {
        session.startTransaction()

        const userId = await generateAdminId()

        userData.id = userId

        const newUser = await User.create([userData], { session })
        if (!newUser.length) {
            await session.abortTransaction();
            await session.endSession();
            throw new AppError(400, 'Admin create failed')
        }

        payload.user = newUser[0]._id
        payload.id = userId

        const result = (await Admin.create([payload], { session }))
        if (!result.length) {
            await session.abortTransaction();
            await session.endSession();
            throw new AppError(400, 'Admin create failed')
        }
        await session.commitTransaction()
        await session.endSession()
        return result
    } catch (error: any) {
        await session.abortTransaction()
        await session.endSession()
        throw new Error(error)

    }

}


export const userServices = {
    createPatientIntoDB, createDoctorIntoDB, createAdminIntoDB
}