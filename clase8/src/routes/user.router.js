import {Router} from "express";
import { userModel } from "../models/user.model.js";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
    try {
        const users = await userModel.find();

        res.send({result:"ok", payload:users});
    } catch (error) {
        res.status(400).send({result:"error", message:"Error! No se pudo realizar la solicitud!"})
    }
})
userRouter.post("/", async (req, res) => {
    try {
        const {firstName, lastName, email} = req.body;

        if (!firstName || !lastName || !email) {
            res.status(400).send({result:"error", message:"Error! Falta completar los campos Nombre, Apellido y Email!"});
        }

        const existeUsuario = await userModel.find({email:email});        

        if (existeUsuario.length == 0) {
            const result = await userModel.create({firstName:firstName, lastName:lastName, email:email});

            if (result) {
                res.send({result:"ok", message:result})
            } else {
                res.status(400).send({result:"error", message:"Error! No se pudo guardar el Usuario!"});
            }
        } else {
            res.status(400).send({result:"error", message:"Error! Ya existe el Email del Usuario ingresado!"});
        }
    } catch (error) {

    }
})

export default userRouter;