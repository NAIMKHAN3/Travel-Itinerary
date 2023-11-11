import { NextFunction, Request, Response } from "express";
import { IItinerary } from "./itinerary.interface";
import { Itinerary } from "./itinerary.model";

export const createItinerary = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { name, city, country, startDate, endDate, activities } = req.body;
        const { _id } = req.user;
        const itenerary: IItinerary = {
            name,
            destination: {
                city,
                country
            },
            user: _id,
            activities,
            startDate,
            endDate
        }
        const result = await Itinerary.create(itenerary)
        res.status(201).send({
            success: true,
            message: "Itinerary create done",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}