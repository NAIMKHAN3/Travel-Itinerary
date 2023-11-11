import { Types } from "mongoose";

export interface ITransportations {
    _id?: string;
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