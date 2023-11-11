import { Schema, model } from "mongoose";
import { ITransportations } from "./transportations.interface";

const tranportatonsSchema = new Schema<ITransportations>({
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    itinerary: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Itinerary'
    },
    mode: {
        type: String,
        required: true
    },
    operator: {
        type: String,
        required: true
    },
    depertureCity: {
        type: String,
        required: true
    },
    arrivalCity: {
        type: String,
        required: true
    },
    depertureTime: {
        type: Date,
        required: true
    },
    arrivalTime: {
        type: Date,
        required: true
    },
}, { timestamps: true })

export const Tranportations = model<ITransportations>('Transportations', tranportatonsSchema)