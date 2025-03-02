import express from "express";
import {loginUser, registerUser, sendOtpEmail, verifyOtpEmail , verify} from "../controllers/auth.controller.js"

const router = express.Router();

router.post("/register",registerUser);

router.post("/login",loginUser);

router.get("/verify" , verify);

router.post("/sendOtpEmail",sendOtpEmail);

router.post("/verifyOtpEmail",verifyOtpEmail);

// router.post('/sendOtpPhone', sendOtpPhone); not now

export default router;
