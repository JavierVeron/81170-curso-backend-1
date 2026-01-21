import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        index:true
    },
    lastName:String,
    email:String,
    gender:String
})

export const userModel = mongoose.model("usuarios", userSchema);