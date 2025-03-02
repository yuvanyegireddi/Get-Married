import express from "express";
import { adminLogin, deleteProfile, getAllMatches, viewAllProfiles, viewInterests } from "../controllers/admin.controller.js";
import { adminProtectRoute } from "../middleware/adminProtectRoute.js";

const router = express.Router();


router.post("/login",adminLogin);

router.get("/viewAllProfiles",adminProtectRoute,viewAllProfiles);

router.delete("/delete/:_id",adminProtectRoute,deleteProfile);


router.get("/viewInterests",adminProtectRoute,viewInterests);

router.get("/getAllMatches",adminProtectRoute,getAllMatches);



export default router;