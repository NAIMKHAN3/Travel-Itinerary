import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyAccommodation } from "./accommodation.validation";
import { createAccommodation } from "./accommodation.controller";

const router = Router();

router.post('/create-accommodation', verifyJwt, verifyAccommodation, createAccommodation)

export default router;