const objetos = [
    {manzanas:3, peras:2, carne:1, jugos:5, dulces:2},
    {manzanas:1, sandias:1, huevos:6, jugos:1, panes:4}
]

// El total de todos los tipos de productos
/* const productos = [];
objetos.forEach(item => {
    const productosObjeto = Object.keys(item);

    productosObjeto.forEach(item2 => {
        if (!productos.includes(item2)) {
            productos.push(item2);
        }
    })    
})

console.log(productos); */

// El total vendido de todos los productos
/* let total = 0;
objetos.forEach(item => {
    const productosObjeto = Object.values(item);

    productosObjeto.forEach(item2 => {
        total += item2
    })    
})

console.log(total); */


// Ticket Manager
class TicketManager {
    #precioBaseDeGanancia = 100000;

    constructor() {
        this.eventos = [];
    }

    getEventos() {
        return this.eventos;
    }

    calcularId() {
        return this.eventos.length + 1;
    }

    crearFecha(fecha) {
        if (fecha == undefined || fecha == "") {
            const fechaActual = new Date()
            fecha = fechaActual.getDate() + "-" + (fechaActual.getMonth()+1) + "-" + fechaActual.getFullYear();            
        }

        return fecha;
    }

    agregarEvento(nombre, lugar, precio, capacidad=50, fecha) {
        precio += (precio * 15) / 100;
        const evento = {id:this.calcularId(), nombre, lugar, precio, capacidad, fecha:this.crearFecha(fecha), participantes:[]};
        this.eventos.push(evento);
        console.log("Se agregó el Evento!");
    }

    agregarUsuario(idEvento, idUsuario) {
        const evento = this.eventos.find(item => item.id == idEvento);

        if (evento) {
            if (!evento.participantes.includes(idUsuario)) {
                evento.participantes.push(idUsuario);
                console.log("Se agrego el Usuario #" + idUsuario + " al Evento #" + idEvento);
                
            } else {
                console.log("El Usuario ya se encuentra registrado!");
            }
        } else {
            console.log("No existe el Evento ingresado!");
        }
    }

    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
        const evento = this.eventos.find(item => item.id == idEvento);
        const nuevoEvento = {...evento, id:this.calcularId(), lugar:nuevaLocalidad, fecha:this.crearFecha(nuevaFecha), participantes:[]};
        this.eventos.push(nuevoEvento);
        console.log("Se agregó el nuevo Evento!");
    }
}

const TM = new TicketManager();
TM.agregarEvento("OASIS", "River", 300000, 50000);
console.log(TM.getEventos());
TM.agregarUsuario(2, 1);
TM.agregarUsuario(1, 1);
TM.agregarUsuario(1, 1);
TM.agregarUsuario(1, 2);
TM.ponerEventoEnGira(1, "Mar del Plata", "20-11-2025");
console.log(TM.getEventos());