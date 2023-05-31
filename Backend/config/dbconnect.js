import mongoose from "mongoose"


const dbconnect=()=>{
    try {
        const conn=mongoose.connect("mongodb://localhost:27017/buspass")
        console.log("DB connected...")
    } catch (error) {
       console.log(error) 
    }
}

export default dbconnect;