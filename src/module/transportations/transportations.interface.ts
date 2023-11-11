import { Types } from "mongoose";

export interface ITransportations {
    _id?: string;
    user: Types.ObjectId;
    itinerary: Types.ObjectId;
    mode: string;
    operator: string;
    depertureCity: string;
    arrivalCity: string;
    depertureTime: Date;
    arrivalTime: Date;
    createdAt?: string;
    updatedAt?: string;
}