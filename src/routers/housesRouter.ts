import { Router } from "express";
import {
  deleteHouse,
  getHouses,
  getHousesById,
  postHouse,
  putAc,
  putPool,
} from "../controllers/housesController.js";

const router = Router();

router.get("/houses", getHouses);

router.get("/house/:houseId", getHousesById);

router.post("/house", postHouse);

router.delete("/house/:houseId", deleteHouse);

router.put("/house/ac/:houseId", putAc);

router.put("/house/pool/:houseId", putPool);

export default router;
