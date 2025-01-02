import { Types } from "mongoose";

export type TAppointment = {
    date: Date;
    time: string;
    cost: string;
    doctor: Types.ObjectId;
    reason: string;
}