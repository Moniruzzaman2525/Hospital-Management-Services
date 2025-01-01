export type TUser = {
    id: string;
    role: 'doctor' | 'patient' | 'staff' | 'admin';
    password: string;
    email: string;
    status: 'in-progress' | 'blocked';
    isDeleted: boolean
}