import { Router } from "express";
import {
  deleteClient,
  getClientById,
  getClients,
  postClient,
} from "../controllers/clientsController.js";

const router = Router();

router.get("/clients", getClients);

router.get("/client/:clientId", getClientById);

router.post("/client", postClient);

router.delete("/client/:clientId", deleteClient);

export default router;
