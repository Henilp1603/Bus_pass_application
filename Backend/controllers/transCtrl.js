
import TransData from "../models/transactionModel.js";



const getTransData=async(req,res)=>{
    
    const newData=new TransData({
        name:req.body.name,
        total:req.body.total,
        status:req.body.status, 
    })
    try {
        const savedData=await newData.save()
        res.status(201).json(savedData)
    } catch (error) {
        res.status(500).json(error)
    }


}

const getAllTrnsac=async(req,res)=>{
    try {
        const data=await TransData.find();
        res.json(data);
    } catch (error) {
        res.status(500).json(error)
    }

}

const deleteAllTrans=async(req,res)=>{
    try {
        await TransData.deleteMany({});
        res.status(200).json("Transactions has been deleted..")
    } catch (error) {
        res.status(500).json(error)
    }
}
export  {getTransData,getAllTrnsac,deleteAllTrans}
