import {Router} from "express";
import { studentModel } from "../models/student.model.js";

const studentRouter = Router();

studentRouter.get("/", async (req, res) => {
    try {
        const result = await studentModel.find();

        res.send({result:"ok", payload:result});
    } catch (error) {
        res.status(400).send({result:"error", message:"Error! No se pudo realizar la solicitud!"})
    }
})
studentRouter.post("/", async (req, res) => {
    try {
        const {nombre, apellido, edad, dni, curso, nota} = req.body;

        if (!nombre || !apellido || !edad || !dni || !curso || !nota) {
            res.status(400).send({result:"error", message:"Error! Falta completar los campos Nombre, Apellido y Email!"});
        }

        const existe = await studentModel.find({dni:dni});        

        if (existe.length == 0) {
            const result = await studentModel.create({nombre, apellido, edad, dni, curso, nota});

            if (result) {
                res.send({result:"ok", message:result})
            } else {
                res.status(400).send({result:"error", message:"Error! No se pudo guardar el Estudiante!"});
            }
        } else {
            res.status(400).send({result:"error", message:"Error! Ya existe el DNI del Estudiante ingresado!"});
        }
    } catch (error) {
        res.status(400).send({result:"error", message:"Error! No se pudo guardar el Estudiante!"});
    }
})
studentRouter.put("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        console.log(id);
        
        const {nombre, apellido, edad, dni, curso, nota} = req.body;

        if (!nombre || !apellido || !edad || !dni || !curso || !nota) {
            res.status(400).send({result:"error", message:"Error! Falta completar los campos Nombre, Apellido y Email!"});
        }

        const result = await studentModel.updateOne({_id:id}, {nombre, apellido, edad, dni, curso, nota});
        
        if (result.modifiedCount > 0) {
            res.send({result:"ok", message:"Se actualizó el Estudiante!"});
        } else {
            res.status(400).send({result:"error", message:"Error! No se encontró el Estudiante!"});
        }
    } catch (error) {
        res.status(400).send({result:"error", message:"Error! No se pudo actualizar el Estudiante!"});
    }
})
studentRouter.delete("/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const result = await studentModel.deleteOne({_id:id});
        
        if (result.deletedCount > 0) {
            res.send({result:"ok", message:"Se eliminó el Estudiante!"});
        } else {
            res.status(400).send({result:"error", message:"Error! No se encontró el Estudiante!"});
        }
    } catch (error) {
        res.status(400).send({result:"error", message:"Error! No se pudo eliminar el Estudiante!"});
    }
})

export default studentRouter;