import { NextFunction, Request, Response } from "express"
import { Accommodation } from "./accommodation.model"
import { Tranportations } from "../transportations/transportations.model"
import mongoose from "mongoose"

export const createAccommodation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.body.user = req.user._id
        const result = await Accommodation.create(req.body)
        const findTransportaions = await Tranportations.findById(req.body.transportations)
        if (findTransportaions) {
            findTransportaions.accommodation = new mongoose.Types.ObjectId(result._id);
            await findTransportaions.save();
        }
        res.status(201).send({
            success: true,
            message: "Accommodation create done",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const updateAccommodation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Accommodation.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).send({
            success: true,
            message: "Accommodation update done",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getAccommodationsByUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Accommodation.find({user: req.user._id})
        res.status(200).send({
            success: true,
            message: "Accommodation get done",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const getAccommodationsById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Accommodation.findById(req.params.id)
        res.status(200).send({
            success: true,
            message: "Accommodation get done",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const deleteAccommodation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await Accommodation.findByIdAndDelete(req.params.id)
        res.status(200).send({
            success: true,
            message: "Accommodation delete done",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}