import { Types } from "mongoose";

export type TAppointment = {
    id: string;
    time: string;
    reason: string;
    cost: string;
    doctor: Types.ObjectId;
    patient: Types.ObjectId;
    user: Types.ObjectId;
}