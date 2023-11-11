import { NextFunction, Request, Response } from "express";
import { Tranportations } from "./transportations.model";
import { Itinerary } from "../itinerary/itinerary.model";
import mongoose from "mongoose";
import { Accommodation } from "../accommodation/accommodation.model";

export const createTransportation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.body.user = req.user._id
        const result = await Tranportations.create(req.body)
        const findItinerary = await Itinerary.findById(req.body.itinerary)
        if (findItinerary) {
            findItinerary.tranportations = new mongoose.Types.ObjectId(result._id);
            await findItinerary.save();
        }
        res.status(201).send({
            success: true,
            message: "Transportation create done",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const updateTransportation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Tranportations.findByIdAndUpdate(req.params.id, req.body,{new:true});
        if(!result){
            return res.status(400).send({
                success: false,
                message: "Transportation not found"
            })
        }
        res.status(200).send({
            success: true,
            message: "Transportation update done",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getTransportationsByUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Tranportations.find({user: req.user._id})
        res.status(200).send({
            success: true,
            message: "Transportation get done",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getTransportationsById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Tranportations.findById(req.params.id)
        res.status(200).send({
            success: true,
            message: "Transportation get done",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const deleteTransportations = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Tranportations.findByIdAndDelete(req.params.id)
        const deleteAccommodation = await Accommodation.findByIdAndDelete(result?.accommodation)
        res.status(200).send({
            success: true,
            message: "Transportation delete done",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}