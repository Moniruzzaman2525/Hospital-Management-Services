import { Types } from "mongoose";

export type TAppointment = {
    id: string;
    name: string;
    time: string;
    description: string;
    cost: string;
    doctor: Types.ObjectId;
    user: Types.ObjectId;
}