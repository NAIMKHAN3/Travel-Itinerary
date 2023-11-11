import { Router } from "express";
import { verifyJwt } from "../../middleware/verifyJwt";
import { verifyTransportations, verifyUpdateTransportations } from "./transportations.validation";
import { createTransportation, deleteTransportations, getTransportationsById, getTransportationsByUser, updateTransportation } from "./transportations.controller";
import { verifyParams } from "../../middleware/verifyParams";

const router = Router();

router.post('/create-transportations', verifyJwt, verifyTransportations, createTransportation);
router.get('/get-transportations-by-user', verifyJwt,  getTransportationsByUser);
router.get('/get-transportations-by-id/:id', verifyParams, verifyJwt,  getTransportationsById);
router.delete('/delete-transportations/:id', verifyParams, verifyJwt,  deleteTransportations);
router.put('/update-transportations/:id', verifyParams, verifyJwt, verifyUpdateTransportations,  updateTransportation);

export default router;