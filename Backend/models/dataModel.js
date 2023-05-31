import mongoose from "mongoose";

const Schema=mongoose.Schema;

const dataSchema = new Schema({
    name:{ type:String, required:true},
    age:{type:String, required:true},
    occupation:{type:String,required:true},
    category:{type:String,required:true},
    address:{type:String,required:true},
    gender:{type:String,required:true},
    passtype:{type:String,required:true},
    fromplace:{type:String,required:true},
    toplace:{type:String,required:true},
    nod:{type:String,required:true},
    fromdate:{type:String,required:true},
    todate:{type:String,required:true},
    
},{timestamps:true})

export default mongoose.model('Data',dataSchema);