import { NextFunction, Request, Response } from "express";
import { Tranportations } from "./transportations.model";

export const createTransportation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.body.user = req.user._id
        const result = await Tranportations.create(req.body)
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