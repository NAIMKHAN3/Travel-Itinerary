import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyItinerary } from "./itinerary.validation";
import { createItinerary, getItinerarys } from "./itinerary.controller";

const router = Router();

router.post('/create-itinerary', verifyJwt, verifyItinerary, createItinerary)
router.get('/get-itinerarys', verifyJwt, getItinerarys)

export default router