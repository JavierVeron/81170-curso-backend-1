import express from "express"
import fs from "fs"

const app = express();
const port = 8080;
const archivo = "usuarios.json";

app.get("/", (request, response) => {
    const {genero, edad} = request.query;

    fs.readFile(archivo, "utf-8", (error, contenido) => {
        const usuarios = JSON.parse(contenido);
        let usuariosFiltrados;

        if (genero && edad) {
            usuariosFiltrados = usuarios.filter(item => item.genero == genero && item.edad == edad);

            response.send(usuariosFiltrados);
        } else if (genero) {
            usuariosFiltrados = usuarios.filter(item => item.genero == genero);

            response.send(usuariosFiltrados);
        } else if (edad) {
            usuariosFiltrados = usuarios.filter(item => item.edad == edad);

            response.send(usuariosFiltrados);
        } else {
            response.send(usuarios);
        }
    })
})

app.get("/:userId", (request, response) => {
    const id = request.params.userId;

    fs.readFile(archivo, "utf-8", (error, contenido) => {
        const usuarios = JSON.parse(contenido);
        const usuario = usuarios.find(item => item.id == id);

        if (usuario) {
            response.send(usuario);
        } else {
            response.send({estado:"error", mensaje:"No se encuentra el Usuario ingresado!"})
        }
    })
})

app.get("/curso/:curso", (request, response) => {
    const curso = request.params.curso;
    
    fs.readFile(archivo, "utf-8", (error, contenido) => {
        const usuarios = JSON.parse(contenido);
        const usuario = usuarios.find(item => item.curso == curso);

        if (usuario) {
            response.send(usuario);
        } else {
            response.send({estado:"error", mensaje:"No se encuentra el Curso ingresado!"})
        }
    })
})

app.listen(port, () => {
    console.log("Servidor Activo: " + port);
})