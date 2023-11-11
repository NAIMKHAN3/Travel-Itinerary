import { Types } from "mongoose";

type Destination = {
    city: string;
    country: string;
}

export interface IItinerary {
    _id?:string;
    name: string;
    destination: Destination;
    user: Types.ObjectId
    startDate: Date;
    endDate:Date;
    activities: string[];
    createdAt?: string;
    updatedAt?: string;
}