import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyItinerary } from "./itinerary.validation";
import { createItinerary, getItineraryById, getItinerarys } from "./itinerary.controller";

const router = Router();

router.post('/create-itinerary', verifyJwt, verifyItinerary, createItinerary)
router.get('/get-itinerarys', verifyJwt, getItinerarys)
router.get('/get-itinerary-by-id/:id', verifyJwt, getItineraryById)

export default router