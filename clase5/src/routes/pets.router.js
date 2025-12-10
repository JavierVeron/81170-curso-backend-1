import express from "express";
import { uploader } from "../utils.js";

const petsRouter = express.Router();
const pets = [];

petsRouter.get("/", (req, res) => {
    res.send(pets);
})

petsRouter.get("/:id", (req, res) => {
    const {id} = req.params;
    const pet = pets.find(item => item.id == id);

    if (pet) {
        res.send(pet);
    } else {
        res.status(400).send({estado:"error", mensaje:"No se encuentra la Mascota!"})
    }
})

petsRouter.post("/", uploader.single('file'), (req, res) => {    
    if (!req.file) {
        res.status(400).send({estado:"error", mensaje:"No se subió ninguna imagen!"});
    }
    
    const nombre = req.body.nombre;
    const id = pets.length + 1;
    const newPet = {id:id, nombre:nombre, archivo:req.file.originalname};
    pets.push(newPet);

    res.send({estado:"ok", mascota:newPet});
})

export default petsRouter