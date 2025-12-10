const agregarMascota = () => {
    const nombre = document.getElementById("nombre");    

    fetch("/api/pets", {
        method:"POST",
        headers: {'Content-type': 'application/json; charset=UTF-8'},
        body:JSON.stringify({nombre:nombre.value})
    })
    .then(response => response.json())
    .then(respuesta => {
        nombre.value = "";
        document.getElementById("resultado").innerHTML = "Se agregó la mascota: <b>" + respuesta.mascota.nombre + "<b>";
    })
}