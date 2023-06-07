import express from "express"
import {getTransData,getAllTrnsac,deleteAllTrans} from "../controllers/transCtrl.js";



const router=express.Router();

router.post("/addTransData",getTransData)
router.get("/getAllData",getAllTrnsac);
router.delete("/deleteAll",deleteAllTrans)




export default router