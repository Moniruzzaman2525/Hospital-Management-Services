import { Types } from "mongoose";

export type TAppointment = {
    name: string;
    description: string;
    cost: string;
    doctor: Types.ObjectId;
    user: Types.ObjectId;
}