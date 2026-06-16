import express from "express";

import {
  getRecommendedDoctors,
} from "../controllers/doctorController.js";

const router = express.Router();

router.post(
  "/recommend",
  getRecommendedDoctors
);

export default router;