import { Router } from "express";
import AuthController from "../controllers/authController.js";

const router = Router();

router.get("/microsoft", (req, res) => AuthController.loginMicrosoft(req, res));

router.get("/callback", (req, res) => AuthController.handleCallback(req, res));

router.post("/microsoft/validar", (req, res) => AuthController.validarTokenMicrosoft(req, res));

export default router;