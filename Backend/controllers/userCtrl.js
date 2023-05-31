import generateToken from "../config/jwtToken.js";
import genraterefreshToken from "../config/refreshToken.js";
import User from "../models/UserModel.js";
import bcrypt from 'bcrypt';
import  jwt  from "jsonwebtoken"



const registerUser=async(req,res)=>{
    const email=req.body.email;
    const findUser=await User.findOne({email});

    if(!findUser){
        const salt = await bcrypt.genSalt(12);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        const newUser=new User({
            name:req.body.name,
            email:req.body.email,
            password:hashPassword,
        })
        try {
            const savedUser=await newUser.save()
            res.status(201).json(savedUser)
        } catch (error) {
            res.status(500).json(error)
        }
    }else{
        res.json({
            msg:"User Already Exists",
            success:false,
        })
    }

}

const logedinUser=async(req,res)=>{
    const {email,password}=req.body;

    try {
        const findUser=await User.findOne({email});
       
        
        if (findUser) {
            const ismatch=await bcrypt.compare(req.body.password,findUser.password);
            if(ismatch){
                const refreshToken= genraterefreshToken(findUser._id);

                const updateUser=await User.findByIdAndUpdate(findUser._id,{refreshToken:refreshToken,},{new:true});

                res.cookie("refreshToken",refreshToken,{
                    httpOnly:true,
                    expires:new Date(Date.now()+25892000000)
                });
               

                res.json({
                        _id: findUser?._id,
                        name:findUser?.name,
                        email: findUser?.email,
                        token: generateToken(findUser?._id),
                    });

                    
            }
        }else{
            res.status(401).json("Wrong credentials")
        }
    } catch (error) {
        res.status(500).json(error)
    }
}

export  {registerUser,logedinUser}