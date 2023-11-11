import { Joi, validate } from "express-validation"

const accommodationValidation = {
    body: Joi.object({
        transportations: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required(),
        resortName: Joi.string().required(),
        resortAddress: Joi.string().required(),
        checkInTime: Joi.date().required(),
        checkOutTime: Joi.date().required(),
    })
}

export const verifyAccommodation = validate(accommodationValidation,{},{})

const updateAccommodationValidation = {
    body: Joi.object({
        transportations: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).optional(),
        resortName: Joi.string().optional(),
        resortAddress: Joi.string().optional(),
        checkInTime: Joi.date().optional(),
        checkOutTime: Joi.date().optional(),
    })
}

export const verifyUpdateAccommodation = validate(updateAccommodationValidation,{},{})