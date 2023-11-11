import { Types } from "mongoose";

export interface IUser{
    _id?:string;
    phoneNumber: string;
    password: string;
    name: string;
    email: string;
    address: string;
    itinerary?: [Types.ObjectId];
    createdAt?: string;
    updatedAt?: string;
}