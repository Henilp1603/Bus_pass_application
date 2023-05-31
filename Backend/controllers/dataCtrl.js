
import Data from "../models/dataModel.js";



const getFromData=async(req,res)=>{
    
    const newData=new Data({
        name:req.body.name,
        age:req.body.age,
        occupation:req.body.occupation,
        category:req.body.category,
        education:req.body.education,
        address:req.body.address,
        gender:req.body.gender,
        passtype:req.body.passtype,
        fromplace:req.body.fromplace,
        toplace:req.body.toplace,
        nod:req.body.nod,
        fromdate:req.body.fromdate,
        todate:req.body.todate, 
    })
    try {
        const savedData=await newData.save()
        res.status(201).json(savedData)
    } catch (error) {
        res.status(500).json(error)
    }


}

export  {getFromData}
