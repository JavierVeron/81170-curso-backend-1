import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    nombre:String,
    tamano:{
        type:String,
        enum:["chica", "mediana", "grande"],
        default:"mediana"
    },
    precio:Number,
    cantidad:Number
})

export const orderModel = mongoose.model("ordenes", orderSchema);