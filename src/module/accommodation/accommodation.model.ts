import { Schema, model } from "mongoose";
import { IAccommodation } from "./accommodation.interface";

const accommodationSchema = new Schema<IAccommodation>({
    user: {
        type: Schema.ObjectId,
        required: true,
        ref: 'User'
    },
    transportation: {
        type: Schema.ObjectId,
        required: true,
        ref: 'Transportations'
    },
    resortName: {
        type: String,
        required: true
    },
    resortAddress: {
        type: String,
        required: true
    },
    checkInTime: {
        type: Date,
        required: true
    },
    checkOutTime: {
        type: Date,
        required: true
    },
}, { timestamps: true })

export const Accommodation = model<IAccommodation>('Accommodation', accommodationSchema)