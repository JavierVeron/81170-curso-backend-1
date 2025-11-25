// setTimeout
/* console.log("Inicio del Proceso");

setTimeout(() => {
    console.log("Mitad del Proceso!"); // Se ejecuta de forma asíncrona
}, 1000)

console.log("Fin del Proceso"); */

// setInterval
const contador = () => {
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
console.log("Fin del Proceso");