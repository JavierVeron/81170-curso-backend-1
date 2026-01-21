import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const studentSchema = new mongoose.Schema({
    nombre:String,
    apellido:String,
    email:String,
    genero:String,
    cursos:{
        type:[
            {
                curso:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"cursos"
                }
            }
        ],
        default:[]
    }
})

studentSchema.plugin(mongoosePaginate);

export const studentModel = mongoose.model("estudiantes", studentSchema);