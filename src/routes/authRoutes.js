import { Router } from "express";
import AuthController from "../controllers/authController.js";

const router = Router();

router.post("/cadastrar", (req, res) => AuthController.cadastrar(req, res));

router.post("/login", function (req, res) {
    AuthController.login(req, res);
});

// Nova rota para iniciar o login com a Microsoft via Supabase
router.get("/microsoft", (req, res) => AuthController.loginMicrosoft(req, res));

// Rota de callback para onde o Supabase/Azure redireciona após autenticar
router.get("/callback", (req, res) => AuthController.callbackMicrosoft(req, res));

export default router;