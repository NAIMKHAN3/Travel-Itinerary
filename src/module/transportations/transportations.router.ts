import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyTransportations } from "./transportations.validation";
import { createTransportation, getTransportationsByUser } from "./transportations.controller";

const router = Router();

router.post('/create-transportation', verifyJwt, verifyTransportations, createTransportation);
router.get('/get-transportation-by-user', verifyJwt,  getTransportationsByUser);

export default router;