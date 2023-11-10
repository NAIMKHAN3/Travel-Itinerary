import { NextFunction, Request, Response } from "express";
import bcrypt from 'bcrypt'
import { User } from "./auth.model";
import { createToken } from "../../utils/token.utils";

export const createRegister = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        req.body.password = hashedPassword;
        const result = await User.create(req.body);
        const user = {
            _id: result._id,
            name: result.name,
            email: result.email,
            address: result.address,
            phoneNumber: result.phoneNumber,
        }
        const accessToken = createToken(user, "ACCESS");
        const refreshToken = createToken(user, "REFRESH");

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            path: "/",
        });
        res.status(201).send({
            status: true,
            message: "Register Success Done",
            data: user,
            accessToken
        })
    }
    catch (err) {
        next(err)
    }
}


export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, password } = req.body;

        const isUserExist = await User.findOne({ email })
        if (!isUserExist) {
            throw new Error('User not found')
        }
        const isPasswordCorrect = await bcrypt.compare(password, isUserExist.password);
        if (!isPasswordCorrect) {
            throw new Error("Password is incorrect")
        }

        const user = {
            _id: isUserExist._id,
            name: isUserExist.name,
            email: isUserExist.email,
            address: isUserExist.address,
            phoneNumber: isUserExist.phoneNumber,
        }


        const accessToken = createToken(user, "ACCESS");

        const refreshToken = createToken(user, "REFRESH");

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            path: "/",
        });

        res.status(200).send({
            status: true,
            statusCode: 200,
            message: "User Login Success",
            data: user,
            accessToken
        })
    }
    catch (err) {
        next(err)
    }
}