import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyItinerary } from "./itinerary.validation";
import { createItinerary, deleteItinerary, getItineraryById, getItinerarys } from "./itinerary.controller";

const router = Router();

router.post('/create-itinerary', verifyJwt, verifyItinerary, createItinerary)
router.get('/get-itinerarys', verifyJwt, getItinerarys)
router.get('/get-itinerary-by-id/:id', verifyJwt, getItineraryById)
router.delete('/delete-itinerary/:id', verifyJwt, deleteItinerary)

export default router