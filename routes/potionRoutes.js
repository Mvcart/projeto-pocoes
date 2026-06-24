import express from "express";
import { listPotions, createPotion, deletePotion } from "../controllers/potionController.js";

const router = express.Router();

router.get("/potions", listPotions);
router.post("/potions", createPotion);
router.delete("/potions/:id", deletePotion);

export default router;