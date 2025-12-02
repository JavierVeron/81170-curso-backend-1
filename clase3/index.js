import { log } from "console";
import fs from "fs"

// setTimeout
/* console.log("Inicio del Proceso");

setTimeout(() => {
    console.log("Mitad del Proceso!"); // Se ejecuta de forma asíncrona
}, 1000)

console.log("Fin del Proceso"); */

// setInterval
/* const contador = () => {
    let counter = 1;
    console.log("Comienza la operación!");

    const timer = setInterval(() => {
        console.log("Contador: #" + counter);
        
        if (counter == 5) {
            console.log("Cancela la operación!");
            clearInterval(timer); // Detener la ejecución del setInterval
        }

        counter++;
    }, 1000)
}

console.log("Inicio del Proceso");
contador(); // Se ejecuta de forma asíncrona
console.log("Fin del Proceso"); */


// Manejo de Archivos
const NOMBRE_ARCHIVO = "archivo.txt";

// FS Sincrónico
// Escribir un archivo
/* fs.writeFileSync(NOMBRE_ARCHIVO, "Curso de Backend I\n");
// Verificar si existe el archivo
if (fs.existsSync(NOMBRE_ARCHIVO)) {
    // Leer el archivo
    let contenido = fs.readFileSync(NOMBRE_ARCHIVO, "utf-8");
    let nuevoTexto = "Curso de Backend II\n";
    // Agregar nuevo contenido
    fs.appendFileSync(NOMBRE_ARCHIVO, nuevoTexto);
    contenido = fs.readFileSync(NOMBRE_ARCHIVO, "utf-8");
    console.log(contenido);
    // Eliminar un archivo
    fs.unlinkSync(NOMBRE_ARCHIVO);
} else {
    console.log("No existe el archivo: " + NOMBRE_ARCHIVO);
} */

// FS Sincrónico con callbacks
// Escribir un archivo
/* //fs.writeFile(NOMBRE_ARCHIVO, "Curso de Backend I\n", (error) => {
    fs.readFile(NOMBRE_ARCHIVO, "utf-8", (error, contenido) => {
        if (error) {
            console.log("No existe el archivo: " + NOMBRE_ARCHIVO);
            return false;
        }

        let nuevoTexto = "Curso de Backend II\n";
        //fs.appendFile(NOMBRE_ARCHIVO, nuevoTexto, (error) => {
            //fs.readFile(NOMBRE_ARCHIVO, "utf-8", (error, contenido) => {
                //console.log(contenido);
            //});
        //})

        fs.unlink(NOMBRE_ARCHIVO, (error) => {            
            if (error) {
                console.log("Error! No se pudo eliminar el archivo!");
            } else {
                console.log("El archivo se eliminó correctamente!");
            }
        })
    })
//}); */


// FS con Promesas
/* const operacionesDeArchivo = async () => {
    await fs.promises.writeFile(NOMBRE_ARCHIVO, "Curso de Backend I\n");
    let contenido = await fs.promises.readFile(NOMBRE_ARCHIVO, "utf-8");
    console.log(contenido);
    let nuevoTexto = "Curso de Backend II\n";
    await fs.promises.appendFile(NOMBRE_ARCHIVO, nuevoTexto);
    contenido = await fs.promises.readFile(NOMBRE_ARCHIVO, "utf-8");
    console.log(contenido);
    //await fs.promises.unlink(NOMBRE_ARCHIVO);
}

operacionesDeArchivo(); */

