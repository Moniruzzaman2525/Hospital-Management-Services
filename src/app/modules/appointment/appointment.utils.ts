import { Appointment } from "./appointment.model";

export const findAppointmentId = async () => {
    const lastAdmin = await Appointment.findOne({})
        .sort({
            createdAt: -1,
        })
        .lean();

    return lastAdmin?.id ? lastAdmin.id.substring(2) : undefined;
};

export const generateAppointmentId = async () => {
    let currentId = (0).toString();
    const lastAdminId = await findAppointmentId();

    if (lastAdminId) {
        currentId = lastAdminId.substring(2);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

    incrementId = `APT-${incrementId}`;

    return incrementId;
};