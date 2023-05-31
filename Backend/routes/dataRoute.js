import express from "express"
import {getFromData} from "../controllers/dataCtrl.js";



const router=express.Router();

router.post("/addData",getFromData)


export default router