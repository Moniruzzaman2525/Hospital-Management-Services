import { TAdmin } from "./admin.interface"
import { Admin } from "./admin.model"

const getAdminFromDB = async () => {
    const result = await Admin.find({}).populate('user')
    return result
}
const getSingleAdminFromDB = async (id: string) => {
    const result = await Admin.findOne({id}).populate('user')
    return result
}
const updateAdminFromDB = async (id: string, payload: Partial<TAdmin>) => {
    const result = await Admin.findByIdAndUpdate(id, payload, {
        new: true,
        runValidators: true,
    });
    
    return result;
}
export const adminServices = {
     getAdminFromDB, getSingleAdminFromDB, updateAdminFromDB
}