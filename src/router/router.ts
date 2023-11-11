import { Router } from "express";
import authRouter from "../module/auth/auth.index";
import itineraryRouter from "../module/itinerary/itinerary.index";


const router = Router();

router.use('/auth', authRouter);
router.use('/itinerary', itineraryRouter);

export default router;