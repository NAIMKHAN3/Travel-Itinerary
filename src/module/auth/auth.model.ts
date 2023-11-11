import { Schema, model } from "mongoose";
import { IUser } from "./auth.interface";

const userSchema = new Schema<IUser>({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    itinerary: {
        type: Schema.Types.ObjectId,
        default: [],
        ref: 'Itinerary'
    }
}, {timestamps: true})

export const User = model<IUser>('User', userSchema);