// Inicializar el Servicio de Socket
const socket = io();

// Enviar un mensaje al Servidor desde el canal "mensaje"
/* socket.emit("mensaje", "Hola a Todos, envío un mensaje desde el Cliente!");

// Escuchar mensajes del canal "mensaje"
socket.on("mensaje", data => {
    console.log(data);
    const texto = document.getElementById("texto");
    texto.innerHTML = data;
})

socket.on("evento_socket_individual", data => {
    console.log(data);
    const texto = document.getElementById("mensaje_individual");
    texto.innerHTML = data;
})

socket.on("evento_para_todos_menos_socket_actual", data => {
    console.log(data);
    const texto = document.getElementById("mensaje_todos_menos_actual");
    texto.innerHTML = data;
})

socket.on("evento_para_todos", data => {
    console.log(data);
    const texto = document.getElementById("mensaje_todos");
    texto.innerHTML = data;
}) */

// Desafío Chat con Websocket
const enviarMensaje = () => {
    const texto = document.getElementById("texto");
    socket.emit("mensaje", texto.value);
    texto.value = "";
}

socket.on("mensajes", data => {
    const mensajes = document.getElementById("mensajes");
    let contenido = `<ul class="list-group">`;

    data.forEach(item => {
        contenido += `<li class="list-group-item">${item.socketId}# ${item.mensaje}</li>`;
    });

    contenido += `</ul>`;
    mensajes.innerHTML = contenido;
})