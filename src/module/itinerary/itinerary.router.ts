import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyItinerary } from "./itinerary.validation";
import { createItinerary } from "./itinerary.controller";

const router = Router();

router.post('/create-itinerary', verifyJwt, verifyItinerary, createItinerary)

export default router