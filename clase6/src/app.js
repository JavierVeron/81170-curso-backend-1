import express from "express";
import handlebars from "express-handlebars";
import viewsRouter from "./routes/view.router.js";
import __dirname from "./utils.js";
import {Server} from "socket.io";

const app = express();
const port = 8080;
const httpServer = app.listen(port, () => { // Nuestro Servidor Http (handlebars)
    console.log("Servidor Activo: " + port);
})
const socketServer = new Server(httpServer); // Nuestro Servidor Socket (socket.io)
app.use(express.json()); 
app.use(express.urlencoded({extended:true}));
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use(express.static(__dirname + "/public")); // Nos sirve para implementar un servidor estático de página html
app.use("/", viewsRouter);

socketServer.on("connection", socket => {
    /* socket.on("mensaje", data => {
        console.log(data);
    })
    socket.emit("mensaje", "Hola! Te envío un mensaje desde el Server!"); */
    
    /* setTimeout(() => {
        socket.emit("mensaje", "Se viene Navidad!");
    }, 2000);

    setTimeout(() => {
        socket.emit("mensaje", "Ya pediste tu Regalo?");
    }, 4000);

    setTimeout(() => {
        socket.emit("mensaje", "Tenés un bono de $20.000 para tu próxima Compra!");
    }, 6000); */

    /* socket.emit("evento_socket_individual", "Mensaje individual");
    socket.broadcast.emit("evento_para_todos_menos_socket_actual", "Mensaje para todos menos el actual");
    socketServer.emit("evento_para_todos", "Mensaje para Todos!"); */

    // Desafio Chat sobre WebSocket
    const mensajes = []; // Array de los Mensajes
    const generarId = () => (mensajes.length + 1);

    socket.on("mensaje", data => {
        const nuevoMensaje = {socketId:generarId(), mensaje:data};
        mensajes.push(nuevoMensaje);
        //socket.broadcast.emit("mensajes", mensajes);
        socketServer.emit("mensajes", mensajes);
    })
})
