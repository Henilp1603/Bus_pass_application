import  jwt  from "jsonwebtoken"


const genraterefreshToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SEC,{expiresIn:"3d"})
}

export default genraterefreshToken