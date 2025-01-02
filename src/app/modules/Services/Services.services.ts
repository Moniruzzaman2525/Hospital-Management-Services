import mongoose from "mongoose"
import { THospitalServices } from "./Services.interface"
import { hospitalServices } from "./Services.model"
import { generateServicesId } from "./services.utils"


const createServicesIntoDB = async (payload: THospitalServices) => {
    const session = await mongoose.startSession()
    try {
        session.startTransaction()
        const servicesId = await generateServicesId()
        payload.id = servicesId
        const result = await hospitalServices.create(payload)
        await session.commitTransaction()
        await session.endSession()
        return result
    } catch (error: any) {
        await session.abortTransaction()
        await session.endSession()
        throw new Error(error)
    }
}


export const services = {
    createServicesIntoDB
}