import express from "express"

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.listen(port, () => {
    console.log("Servidor Activo: " + port);
})

const texto = {frase:""};

app.get("/api/frase", (request, response) => {
    response.send(texto);
})

app.get("/api/palabras/:pos", (request, response) => {
    const {pos} = request.params;
    const palabras = texto.frase.split(" ");

    response.send({buscada:palabras[pos-1]});
})

app.post("/api/palabras", (request, response) => {
    const {palabra} = request.body;
    const palabras = texto.frase.split(" ");
    texto.frase = (texto.frase + " " + palabra).trim();

    response.send({agregada:palabra, pos:(palabras.length)});
})

app.put("/api/palabras/:pos", (request, response) => {
    const {pos} = request.params;
    const {palabra} = request.body;
    const palabras = texto.frase.split(" ");
    const palabraAnterior = palabras[pos-1];
    palabras[pos-1] = palabra;
    texto.frase = palabras.join(" ");

    response.send({actualizada:palabra, anterior:palabraAnterior});
})

app.delete("/api/palabras/:pos", (request, response) => {
    const {pos} = request.params;
    const palabras = texto.frase.split(" ");
    const palabraAnterior = palabras[pos-1];
    const palabrasActualizada = palabras.filter(item => item != palabraAnterior)
    texto.frase = palabrasActualizada.join(" ").trim();

    response.send({texto});
})