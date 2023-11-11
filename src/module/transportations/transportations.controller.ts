import { NextFunction, Request, Response } from "express";
import { Tranportations } from "./transportations.model";

export const createTransportation = async (req: Request, res: Response, next: NextFunction) => {
    try {
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