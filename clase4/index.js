// Crear un Servidor HTTP con el módulo nativo de Node
/* import http from "http"

const server = http.createServer((request, response) => {
    //response.end("Hola Coders!"); // texto plano
    //response.end("<h1 style='color:white; background-color:black; font-weight:bold; font-size:50px; padding:5px; text-transform:uppercase;'>Coderhouse</h1>");
    let contenidoHTML = "<h1 style='color:white; background-color:black; font-weight:bold; font-size:50px; padding:5px; text-transform:uppercase;'>Coderhouse</h1>";
    response.end(contenidoHTML);
})
const port = 8080;

server.listen(port, () => {
    console.log("Servidor Activo: " + port);
}) */


// Creamos un Servidor con el módulo express
import express from "express"

const app = express();
const port = 8080;

app.get("/", (request, response) => {
    //response.send("Hola Coders!");
    //response.send("<h1 style='color:white; background-color:black; font-weight:bold; font-size:50px; padding:5px; text-transform:uppercase;'>Coderhouse</h1>");
    let contenidoHTML = "<h1 style='color:white; background-color:black; font-weight:bold; font-size:50px; padding:5px; text-transform:uppercase;'>Coderhouse</h1>";
    response.end(contenidoHTML);
})

app.get("/productos", (request, response) => {
    const productos = [
        {id:1, nombre:"Coca Cola", precio:4200},
        {id:2, nombre:"Coca Cola Zero", precio:4100},
        {id:3, nombre:"Pepsi", precio:4100},
        {id:4, nombre:"Pepsi Max", precio:3900}
    ]

    response.send(productos);
})

app.listen(port, () => {
    console.log("Servidor Activo: " + port);
})