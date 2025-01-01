import { User } from "./user.model";

export const findPatientId = async () => {
    const lastPatient = await User.findOne(
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

    return lastPatient?.id ? lastPatient.id.substring(2) : undefined;
};

export const generatePatientId = async () => {
    let currentId = (0).toString();
    const lastPatientId = await findPatientId();

    if (lastPatientId) {
        currentId = lastPatientId.substring(2);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

    incrementId = `P-${incrementId}`;

    return incrementId;
};
export const findDoctorId = async () => {
    const lastDoctor = await User.findOne(
        {
            role: 'doctor',
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

    return lastDoctor?.id ? lastDoctor.id.substring(2) : undefined;
};

export const generateDoctorId = async () => {
    let currentId = (0).toString();
    const lastDoctorId = await findDoctorId();

    if (lastDoctorId) {
        currentId = lastDoctorId.substring(2);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

    incrementId = `D-${incrementId}`;

    return incrementId;
};
export const findStaffId = async () => {
    const lastStaff = await User.findOne(
        {
            role: 'staff',
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

    return lastStaff?.id ? lastStaff.id.substring(2) : undefined;
};

export const generateStaffId = async () => {
    let currentId = (0).toString();
    const lastStaffId = await findStaffId();

    if (lastStaffId) {
        currentId = lastStaffId.substring(2);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

    incrementId = `S-${incrementId}`;

    return incrementId;
};
export const findAdminId = async () => {
    const lastAdmin = await User.findOne(
        {
            role: 'admin',
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

    return lastAdmin?.id ? lastAdmin.id.substring(2) : undefined;
};

export const generateAdminId = async () => {
    let currentId = (0).toString();
    const lastAdminId = await findAdminId();

    if (lastAdminId) {
        currentId = lastAdminId.substring(2);
    }

    let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

    incrementId = `A-${incrementId}`;

    return incrementId;
};