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

export const getItinerarys = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { _id } = req.user;
       
        const result = await Itinerary.find({user:_id})
        res.status(200).send({
            success: true,
            message: "Itinerary get done",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}

export const getItineraryById = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
       
        const result = await Itinerary.findById(id)
        res.status(200).send({
            success: true,
            message: "Itinerary get done",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}
export const deleteItinerary = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
       
        const result = await Itinerary.findByIdAndDelete(id)
        res.status(200).send({
            success: true,
            message: "Itinerary delete done",
            data: result
        })
    }
    catch (err) {
        next(err)
    }
}