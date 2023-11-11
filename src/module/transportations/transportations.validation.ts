import { Joi, validate } from "express-validation";

const transportationValidation = {
    body: Joi.object({
        itinerary: Joi.string().required(),
        mode: Joi.string().required(),
        operator: Joi.string().required(),
        depertureCity: Joi.string().required(),
        arrivalCity: Joi.string().required(),
        depertureTime: Joi.date().required(),
        arrivalTime: Joi.date().required(),
    })
}

export const verifyTransportations = validate(transportationValidation,{},{})