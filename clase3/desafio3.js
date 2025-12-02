import fs from "fs"

const archivo = "desafio3.txt";
const fecha = new Date();
const fechaActual = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
fs.writeFile(archivo, fechaActual, (error) => {
    fs.readFile(archivo, "utf-8", (error, contenido) => {
        console.log(contenido);
    });
})