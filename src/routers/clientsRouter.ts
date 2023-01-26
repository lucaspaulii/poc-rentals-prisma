import { Router } from "express";

const router = Router();

router.get("/clients");

router.get("/client/:id");

router.post("/client");

router.delete("/client/:id");

export default router;