import express from "express"
import {logedinUser,registerUser} from "../controllers/userCtrl.js";


const router=express.Router();

router.post("/register",registerUser)
router.post("/login",logedinUser)


export default router