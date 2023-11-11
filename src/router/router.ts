import { Router } from "express";
import authRouter from "../module/auth/auth.index";
import itineraryRouter from "../module/itinerary/itinerary.index";
import transportatonsRouter from "../module/transportations/transportations.index";


const router = Router();

router.use('/auth', authRouter);
router.use('/itinerary', itineraryRouter);
router.use('/transportations', transportatonsRouter);

export default router;