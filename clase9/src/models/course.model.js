import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    nombre:String,
    dificultad:String,
    profesor:String,
    estudiantes:{
        type:Array,
        default:[]
    }
})

export const courseModel = mongoose.model("cursos", courseSchema);