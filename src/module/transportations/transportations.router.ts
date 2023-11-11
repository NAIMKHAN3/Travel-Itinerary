import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyTransportations } from "./transportations.validation";
import { createTransportation } from "./transportations.controller";

const router = Router();

router.post('/create-transportation', verifyJwt, verifyTransportations, createTransportation);

export default router;