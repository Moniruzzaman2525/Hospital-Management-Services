import { TStaff } from "./staff.interface"
import { Staff } from "./staff.model"


const getStaffFromDB = async () => {
    const staffData = await Staff.find({}).populate('user')
    return staffData
}
const getSingleStaffFromDB = async (id: string) => {
    const singleStaffData = await Staff.findOne({ id }).populate('user')
    return singleStaffData
}
const updateStaffFromDB = async (id: string, payload: Partial<TStaff>) => {
    const result = await Staff.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    return result;
}

export const staffServices = {
    getStaffFromDB, getSingleStaffFromDB, updateStaffFromDB
}