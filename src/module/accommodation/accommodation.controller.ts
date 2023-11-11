import { NextFunction, Request, Response } from "express"
import { Accommodation } from "./accommodation.model"

export const createAccommodation = async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.body.user = req.user._id
        const result = await Accommodation.create(req.body)
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