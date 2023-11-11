import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyAccommodation, verifyUpdateAccommodation } from "./accommodation.validation";
import { createAccommodation, deleteAccommodation, getAccommodationsById, getAccommodationsByUser, updateAccommodation } from "./accommodation.controller";
import { verifyParams } from "../../middleware/verifyParams";

const router = Router();

router.post('/create-accommodation', verifyJwt, verifyAccommodation, createAccommodation)
router.put('/update-accommodation/:id', verifyParams, verifyJwt, verifyUpdateAccommodation, updateAccommodation)
router.get('/get-accommodations', verifyJwt,  getAccommodationsByUser)
router.get('/get-accommodation-by-id/:id',verifyParams, verifyJwt,  getAccommodationsById)
router.get('/delete-accommodation/:id',verifyParams, verifyJwt,  deleteAccommodation)

export default router;