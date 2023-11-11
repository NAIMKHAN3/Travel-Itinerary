import { Joi, validate } from "express-validation";

const transportationValidation = {
    body: Joi.object({
        itinerary: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
        mode: Joi.string().required(),
        operator: Joi.string().required(),
        depertureCity: Joi.string().required(),
        arrivalCity: Joi.string().required(),
        depertureTime: Joi.date().required(),
        arrivalTime: Joi.date().required(),
    })
}

export const verifyTransportations = validate(transportationValidation,{},{})

const updateTransportationValidation = {
    body: Joi.object({
        itinerary: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).optional(),
        mode: Joi.string().optional(),
        operator: Joi.string().optional(),
        depertureCity: Joi.string().optional(),
        arrivalCity: Joi.string().optional(),
        depertureTime: Joi.date().optional(),
        arrivalTime: Joi.date().optional(),
    })
}

export const verifyUpdateTransportations = validate(updateTransportationValidation,{},{})