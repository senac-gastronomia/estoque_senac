// const { Router } = require("express");
import { Router } from "express";
import AuthController from "../controllers/authController.js";

const router = Router();

router.post("/cadastrar", function (req, res) {
    AuthController.cadastrar(req, res)
});

router.post("/login", (req, res) => {
    AuthController.login(req,res)
});

export default router;