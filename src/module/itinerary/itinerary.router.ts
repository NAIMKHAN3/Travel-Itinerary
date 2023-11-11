import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyItinerary, verifyUpdateItinerary } from "./itinerary.validation";
import { UpdateItinerary, createItinerary, deleteItinerary, getItineraryById, getItinerarys } from "./itinerary.controller";

const router = Router();

router.post('/create-itinerary', verifyJwt, verifyItinerary, createItinerary)
router.get('/get-itinerarys', verifyJwt, getItinerarys)
router.get('/get-itinerary-by-id/:id', verifyJwt, getItineraryById)
router.put('/update-itinerary/:id', verifyJwt, verifyUpdateItinerary, UpdateItinerary)
router.delete('/delete-itinerary/:id', verifyJwt, deleteItinerary)

export default router