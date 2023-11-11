import { Joi, validate } from "express-validation"

const accommodationValidation = {
    body: Joi.object({
        tranportations: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
        resotName: Joi.string().required(),
        resotAddress: Joi.string().required(),
        checkInTime: Joi.date().required(),
        checkOutTime: Joi.date().required(),
    })
}

export const verifyAccommodation = validate(accommodationValidation,{},{})