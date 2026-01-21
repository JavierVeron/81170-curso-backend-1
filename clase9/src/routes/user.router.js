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

export default userRouter;