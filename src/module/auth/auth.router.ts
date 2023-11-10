import { Router } from "express";
import { verifyLogin, verifyRegistration } from "./auth.validation";
import { createRegister, loginUser } from "./auth.controller";

const router = Router();

router.post('/register', verifyRegistration, createRegister)
router.post('/login', verifyLogin, loginUser)

export default router;