import express from "express";
import {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";
import validateUser from "../middlewares/inputValidations.js";
const router = express.Router();

router.post("/user", createUser);
router.get("/user", getAllUser);
router.get("/user/:id", getUserById);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);

export default router;