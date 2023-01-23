import { Router } from "express";
import {
  deleteRental,
  getRentalById,
  getRentals,
  paidRental,
  postRental,
} from "../controllers/rentalsController.js";
import rentalsServices from "../services/rentalsServices.js";

const router = Router();

router.get("/rentals", getRentals);

router.get("/rental/:rentalId", getRentalById);

router.post("/rental", rentalsServices, postRental);

router.put("/rental/paid/:rentalId", paidRental);

router.delete("/rental/:rentalId", deleteRental);

export default router;
