import express from "express";
import { userController } from "../controllers/user.controller";

const router = express.Router();

router.put("/:id", userController.updateUser);
router.get("/:id", userController.getUserById);
router.get("/", userController.getUsers);
router.delete("/:id", userController.deleteUserById);
router.post("/", userController.postUser);

export default router;
