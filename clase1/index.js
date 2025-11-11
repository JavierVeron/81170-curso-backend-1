// Diferentes tipos de Console
/* console.log("Hola a todos!");
console.info("Console tipo Información!");
console.warn("Console del tipo Advertencia!");
console.error("Console del tipo Error!"); */

// Imprimiendo diferentes tipos de datos
/* let nombre;
let valor1 = 10;
let valor2 = "20";
let resultado = parseFloat(valor1) * parseFloat(valor2);

console.log("Hola");
console.log(123);
console.log(true);
console.log(null);
console.log(undefined); // Es una variable declarada pero no tiene asignado ningún valor
console.log(nombre);
console.log({id:1, nombre:"Coca Cola", precio:3500});
console.log(["Joaquín", "Brian", "Sofía", "Nicolás"]);
console.log(resultado); */

// Mutabilidad
// Variable
/* let nombre = "Román"; // Una variable por defecto es MUTABLE (puede cambiar de valor)
nombre = "Ricardo";

if (nombre.length > 2) {
    nombre = "Rocío";
}

console.log(nombre); */

// Constante
/* const nombre2 = "Román"; // Una constante por defecto NO ES MUTABLE (no se puede cambiar de valor, se define por única vez)
//nombre2 = "Ricardo";

if (nombre2.length > 2) {
    //nombre2 = "Rocío";
}

console.log(nombre2); */

// Objetos (arrays y funciones anónimas y funciones flechas sería una buena práctica definirlos como constantes)
/* const producto = {
    id:1,
    nombre:"Coca Cola",
    precio:3500,
    categoria:"bebidas"
}

producto.nombre = "Sprite"; // Esto si es MUTABLE (las propiedades de los objetos son MUTABLES)
console.log(producto); */


// 3 tipos de declaración de funciones
// Opción #1 => utilizando la palabra reserva "function"
/* function sumar(valor1, valor2) {
    return valor1 + valor2
} */

// Opción #2 => función anónima, es una función que no tiene nombre, pero el nombre de la función es la variable.
/* const sumar = function(valor1, valor2) {
    return valor1 + valor2
} */

// Opción #3 => función flecha (arrow function), es una función que no tiene nombre, pero el nombre de la función es la variable. Se reemplaza la palabra "function" por "=>"
/* const sumar = (valor1, valor2) => {
    return valor1 + valor2
}

console.log("Resultado: " + sumar(10, 20)); */


// Ejemplo Práctico #1
const mostrarLista = (unArray) => {
    if (unArray.length == 0) {
        console.log("Lista vacía!");
    } else {
        unArray.forEach(elemento => {
            console.log(elemento.nombre + " => $" + elemento.precio);        
        });

        console.log("Cantidad de Productos: " + unArray.length);
    }
}

//const nombres = [];
//const nombres = ["Axel", "José", "Carmina", "Rocío", "Sofía", "Lucas"];
/* const productos = [
    {id:1, nombre:"Coca Cola", precio:3500},
    {id:2, nombre:"Pepsi", precio:3300},
    {id:3, nombre:"Coca Cola Zero", precio:3600},
    {id:4, nombre:"Pepsi Max", precio:3400}
];
mostrarLista(productos); */


// Clases
/* class Persona {
    constructor(nombre, apellido) {
        this.name = nombre; // Propiedades (variables)
        this.lastname = apellido;
    }

    static especie = "humano(a)";

    getFullName() { // Métodos (funciones)
        return this.lastname + ", " + this.name
    }

    getSpecie() {
        return "Soy un/a " + Persona.especie;
    }
}

const persona1 = new Persona("Nora", "Saucedo");
const persona2 = new Persona("Nicolas", "Lerech");
console.log(persona1.getFullName());
console.log(persona1.getSpecie());
console.log(persona2.getFullName());
console.log(persona2.getSpecie()); */

// Ejemplo de una Clase de Turnos
/* class Turnos {
    constructor() {
        this.turnos = [];
    }

    static especialidades = ["Cardiologia", "Traumatologia", "Odontologia"];

    listarTurnos() {
        this.turnos.forEach(item => {
            console.log(item.especialidad + " / Fecha: " + item.fecha + " / Hora: " + item.hora + " / Paciente: " + item.nombre);
        })
    }

    listarEspecialidades() {
        Turnos.especialidades.forEach(item => {
            console.log(item);
        })
    }

    agregarTurno(nombre, fecha, hora, especialidad) {
        this.turnos.push({nombre, fecha, hora, especialidad});
    }
}

const turnos = new Turnos();
//turno1.listarEspecialidades();
turnos.agregarTurno("Joaquin Gonalez Caro", "12-11-2025", "10:00", "Cardiologia");
turnos.agregarTurno("Florencia Ramirez", "13-11-2025", "12:30", "Odontologia");
turnos.agregarTurno("Pablo Llanes", "12-11-2025", "9:00", "Cardiologia");
turnos.listarTurnos(); */


// Clase Contador
class Contador {
    constructor(nombre) {
        this.nombre = nombre;
        this.contador = 0;
    }

    static contadorGlobal = 0; // variable global

    getResponsable() {
        return this.nombre;
    }

    contar() {
        this.contador++;
        Contador.contadorGlobal++;
    }

    getCuentaIndividual() {
        return this.contador;
    }

    getCuentaGlobal() {
        return Contador.contadorGlobal;
    }
}

const contador1 = new Contador("Contador #1");
const contador2 = new Contador("Contador #2");
const contador3 = new Contador("Contador #3");
contador1.contar();
contador1.contar();
contador1.contar();
contador2.contar();
contador2.contar();
contador3.contar();
console.log(contador1.getResponsable() + " => " + contador1.getCuentaIndividual()); //3
console.log(contador2.getResponsable() + " => " + contador2.getCuentaIndividual()); //2
console.log(contador3.getResponsable() + " => " + contador3.getCuentaIndividual()); //1
console.log("Contador Global => " + contador1.getCuentaGlobal());

