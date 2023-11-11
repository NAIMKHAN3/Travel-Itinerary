import { Joi, validate } from "express-validation";

const itineraryValidation = {
    body: Joi.object({
        name: Joi.string().required(),
        city: Joi.string().required(),
        country: Joi.string().required(),
        startDate: Joi.date().required(),
        endDate: Joi.date().required(),
        activities: Joi.array().required(),
    })
}

export const verifyItinerary = validate(itineraryValidation,{},{})


const updateItineraryValidation = {
    body: Joi.object({
        name: Joi.string().optional(),
        city: Joi.string().optional(),
        country: Joi.string().optional(),
        startDate: Joi.date().optional(),
        endDate: Joi.date().optional(),
        activities: Joi.array().optional(),
    })
}

export const verifyUpdateItinerary = validate(updateItineraryValidation,{},{})