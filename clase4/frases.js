import express from "express"

const app = express();
const port = 8080;
let frases = "";

app.get("/api/frase", (request, response) => {
    response.send(frases);
})

app.get("/api/palabras/:pos", (request, response) => {
    const pos = request.params.pos;
    const resultado = frases.indexOf(pos, 0) + 1;    

    if (resultado > 0) {
        response.send({buscada:resultado});
    } else {
        response.send({estado:"error", mensaje:"No se encontró la frase buscada!"});
    }
})

app.post("/api/palabras", (request, response) => {
    const {palabra} = request.body;
    console.log(request.body);
    
    const posicion = frases.length + 1;
    frases += " " + palabra;
    const resultado = {agregada:agregada, pos:posicion}

    response.send(resultado);
})



app.listen(port, () => {
    console.log("Servidor Activo: " + port);
})