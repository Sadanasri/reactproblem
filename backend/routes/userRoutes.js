import express from "express";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Get logged in user
router.get("/me", protect, (req, res) => {
  res.json(req.user);
});

export default router;
