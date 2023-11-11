import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyTransportations, verifyUpdateTransportations } from "./transportations.validation";
import { createTransportation, deleteTransportations, getTransportationsById, getTransportationsByUser, updateTransportation } from "./transportations.controller";

const router = Router();

router.post('/create-transportations', verifyJwt, verifyTransportations, createTransportation);
router.get('/get-transportations-by-user', verifyJwt,  getTransportationsByUser);
router.get('/get-transportations-by-id/:id', verifyJwt,  getTransportationsById);
router.delete('/delete-transportations/:id', verifyJwt,  deleteTransportations);
router.put('/update-transportations/:id', verifyJwt, verifyUpdateTransportations,  updateTransportation);

export default router;