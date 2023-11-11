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