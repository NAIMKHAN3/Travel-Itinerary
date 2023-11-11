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

const updateAccommodationValidation = {
    body: Joi.object({
        tranportations: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).optional(),
        resotName: Joi.string().optional(),
        resotAddress: Joi.string().optional(),
        checkInTime: Joi.date().optional(),
        checkOutTime: Joi.date().optional(),
    })
}

export const verifyUpdateAccommodation = validate(updateAccommodationValidation,{},{})