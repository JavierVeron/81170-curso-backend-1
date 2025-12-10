import express from "express";

const userRouter = express.Router();
const users = [];

userRouter.get("/", (req, res) => {
    res.send(users);
})

userRouter.get("/:id", (req, res) => {
    const {id} = req.params;
    const user = users.find(item => item.id == id);

    if (user) {
        res.send(user);
    } else {
        res.status(400).send({estado:"error", mensaje:"No se encuentra el Usuario!"})
    }
})

userRouter.post("/", (req, res) => {
    const {nombre} = req.body;
    const id = users.length + 1;
    const newUser = {id, nombre};
    users.push(newUser);

    res.send({estado:"ok", usuario:newUser});
})

export default userRouter