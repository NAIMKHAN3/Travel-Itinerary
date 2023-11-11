import { Types } from "mongoose";

export interface IAccommodation {
    _id?:string;
    user: Types.ObjectId;
    transportations: Types.ObjectId;
    resortName: string;
    resortAddress: string;
    checkInTime: Date;
    checkOutTime: Date;
    createdAt?:string;
    updatedAt?:string;
}