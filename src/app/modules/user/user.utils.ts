import { User } from "./user.model";

export const findPatientId = async () => {
    const lastFaculty = await User.findOne(
        {
            role: 'patient',
        },
        {
            id: 1,
            _id: 0,
        },
    )
        .sort({
            createdAt: -1,
        })
        .lean();

    return lastFaculty?.id ? lastFaculty.id.substring(2) : undefined;
};

export const generatePatientId = async () => {
    let currentId = (0).toString();
    const lastFacultyId = await findPatientId();

    if (lastFacultyId) {
        currentId = lastFacultyId.substring(2);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

    incrementId = `P-${incrementId}`;

    return incrementId;
};