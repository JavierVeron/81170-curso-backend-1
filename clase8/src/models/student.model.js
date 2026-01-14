import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    nombre:{type:String, require:true},
    apellido:{type:String, require:true},
    edad:{type:Number, require:true},
    dni:{type:String, unique:true},
    curso:{type:String, require:true},
    nota:{type:Number, require:true}
})

export const studentModel = mongoose.model("estudiantes", studentSchema);