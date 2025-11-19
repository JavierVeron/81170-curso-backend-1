// Uso de **
/* const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
const numerosPotencia = numeros.map(item => item ** 2)
console.log(numerosPotencia); */

// Array includes
/* const nombres = ["Nacho", "Ricardo", "Sofia", "Rocio", "Juan"];
const numeros = [1, 2, 3, 4, 5];
console.log(nombres);

let nombreBuscado = "Sofia"; */

// Simplificación del código que se encuentra abajo
/* if (numeros.includes("2")) { // Es
    console.log("Se encontro el nombre buscado!");
} else {
    console.log("Error! No se encontro el nombre buscado!");    
} */

// 
/* encontrado = false;
numeros.forEach(item => {
    if (item === "2") {
        encontrado = true;
    }
})

if (encontrado) {
    console.log("Se encontro el nombre buscado!");
} else {
    console.log("Error! No se encontro el nombre buscado!");    
} */


// Definimos un objeto
/* const producto = {
    id:1,
    nombre:"Coca Cola",
    precio:3500,
    categoria:"bebidas",
    tieneAzucar:true
}

console.log(producto);
console.log(Object.entries(producto));
const entradas = Object.entries(producto);
console.log(entradas[1][1]); */
//console.log(Object.keys(producto));
//console.log(Object.values(producto));

// Repaso de Arrays (find, filter, some y reduce)
const productos = [
    {id:1, nombre:"Coca Cola", precio:3500, stock:10, categoria:"bebidas", tieneAzucar:true},
    {id:2, nombre:"Coca Cola Zero", precio:3400, stock:5, categoria:"bebidas", tieneAzucar:false},
    {id:3, nombre:"Pepsi", precio:3300, stock:4, categoria:"bebidas", tieneAzucar:true},
    {id:4, nombre:"Pepsi Max", precio:3200, stock:6, categoria:"bebidas", tieneAzucar:false},
]

//const arraySimple = ["juan", "pedro", "maria"];
//const arrayMultiDimension = [["juan", "pedro", "maria"], ["juan", ["pedro", "maria"]]];

// Find (busca y devuelve el primer elemento)
//const producto = productos.includes("Pepsi"); // No es recomedable utilizar el método includes en un búsqueda de objetos
//const producto = productos.find(item => item.nombre == "Pepsi");
/* const producto = productos.find(item => {
    if (item.nombre == "Pepsi") {
        return item;
    }
}); */
//console.log(producto);

// Filter (filtra y devuelve un nuevo array)
/* const nuevosProductos = productos.filter(item => item.precio >= 3300);
console.log(nuevosProductos); */

// Some (devuelve true/false)
/* const existeProducto = productos.some(item => item.nombre == "Pepsi Zero");
console.log(existeProducto); */

// Reduce ()
/* const resultado = productos.reduce((acumulador, item) => acumulador += item.precio, 0);
const resultado2 = productos.reduce((acumulador, item) => acumulador += item.precio * item.stock, 0);
console.log(resultado);
console.log(resultado2); */

// Operador spread y Operador Rest
// Variables por copia
/* let valor1 = 10;
let valor2 = valor1;
console.log(valor1);
console.log(valor2);
valor2 = 30;
console.log(valor1);
console.log(valor2); */

// Variables por Referencia
/* const producto1 = {id:1, nombre:"Coca Cola", precio:3500};
const producto2 = producto1; // Tengo la referencia al objeto producto1
producto2.nombre = "Coca Cola Zero";
producto1.precio = 5000;
console.log(producto1);
console.log(producto2); */

// Operador Spread en Objetos
/* const producto1 = {id:1, nombre:"Coca Cola", precio:3500};
const producto2 = {...producto1}; // Desparramo todas las propiedades de producto1 en producto2 (me crea un nuevo objeto)
producto2.nombre = "Coca Cola Zero";
producto1.precio = 5000;
console.log(producto1);
console.log(producto2);
const producto3 = {...producto1, precio:6000, id:5, categoria:"bebidas"};
console.log(producto3); */

// Operador Spread en Arrays
/* const productos2 = productos;
productos2[0].nombre = "Manaos";
console.log(productos);
console.log(productos2); */

/* const productos2 = [...productos]; // Desparrame todos los elementos del array productos en productos2 (me crea un nuevo array)
productos2[0].nombre = "Manaos";
console.log(productos);
console.log(productos2); */

/* const nombres = ["Juan", "Pedro", "Maria"];
const nombres2 = [...nombres];
nombres2[2] = "Rocio";
console.log(nombres);
console.log(nombres2); */

// Operador Rest
/* const numeros = [1, 2, 3, 4]

function sumar(...numeros) {
    return numeros.reduce((acumulador, item) => acumulador += item, 0);
}

let total = sumar(10, 20, 40, 20);
console.log(total); */


// Dynamic Import
/* const ejemploImport = async () => {
    const {default:Calculadora} = await import("./calculadora.js");
    const nuevaCalculadora = new Calculadora;
    let resultado = nuevaCalculadora.sumar(10, 20);    

    console.log(resultado);
}

ejemploImport(); */


// Trim y Flat
/* let texto = " hola ";
console.log(texto.trim().length); */

/* const numeros2 = [1, [2, 3], [4, [5, 6]]];
console.log(numeros2.flat(2)); */


// Operador Nullish
/* let variable = null

// Validación tradicional
console.log(variable ? "válida" : "inválida");
// Validación con Nullish
console.log(variable ?? "inválida"); */

// Variable Privada
/* class Persona {
    #ingresos = 10000 // Propiedad oculta
    constructor(nombre, apellido) {
        this.nombre = nombre; // Propiedades públicas
        this.apellido = apellido;
    }

    darNombre() {
        return this.apellido + ", " + this.nombre
    }

    darIngresos() {
        return this.#ingresos; // Solamente puedo mostrar el contenido de una propiedad oculta a través de sus métodos
    }
}

const persona1 = new Persona("Juan", "Perez");
console.log(persona1);
console.log(persona1.darNombre());
console.log(persona1.darIngresos()); */


