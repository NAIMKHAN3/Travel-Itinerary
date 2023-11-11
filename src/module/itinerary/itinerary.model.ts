import { Schema, model } from "mongoose";
import { IItinerary } from "./itinerary.interface";

const itinerarySchema = new Schema<IItinerary>({
    name: {
        type: String,
        required: true
    },
    destination: {
        city: {
            type: String,
            required: true
        },
        country: {
            type: String,
            required: true
        },
    },
    user: {
        type: Schema.Types.ObjectId,
        required: true
    },
    activities: {
        type: [String],
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    tranportations:{
        type: Schema.Types.ObjectId,
        ref: 'Transportations'
    }
},{timestamps: true})


export   const Itinerary = model<IItinerary>('Itinerary', itinerarySchema)