import { Joi, validate } from "express-validation";

const registrationValidation = {
    body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().min(6).max(24),
        address: Joi.string().required(),
        phoneNumber: Joi.string().required().min(11).max(11),
    })
}

export const verifyRegistration = validate(registrationValidation,{},{})