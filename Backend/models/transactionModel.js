import mongoose from "mongoose";

const Schema=mongoose.Schema;

const transactionSchema = new Schema({
    name:{type:String},
    total:{type:String},
    status:{type:String},
},{timestamps:true})

export default mongoose.model('Transaction',transactionSchema);