import { hospitalServices } from "./Services.model";


export const findServicesId = async () => {
    const lastAdmin = await hospitalServices.findOne({})
        .sort({
            createdAt: -1,
        })
        .lean();

    return lastAdmin?.id ? lastAdmin.id.substring(2) : undefined;
};

export const generateServicesId = async () => {
    let currentId = (0).toString();
    const lastAdminId = await findServicesId();

    if (lastAdminId) {
        currentId = lastAdminId.substring(2);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

    incrementId = `A-${incrementId}`;

    return incrementId;
};