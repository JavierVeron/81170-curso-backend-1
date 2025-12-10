import express from "express";
import handlebars from "express-handlebars";
import userRouter from "./routes/user.router.js";
import petsRouter from "./routes/pets.router.js";
import __dirname from "./utils.js";

const app = express();
const port = 8080;

app.use(express.json()); // Incluir esta linea y la siguiente para poder capturar los datos desde el BODY de un POST
app.use(express.urlencoded({extended:true}));
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use("/", express.static(__dirname + "/public")); // Nos sirve para implementar un servidor estático de página html
app.use("/api/users", userRouter);
app.use("/api/pets", petsRouter);
app.get("/prueba", (req, res) => {
    res.render("prueba", {title:"Esto es un título", contenido:"Bootstrap is a powerful, feature-packed frontend toolkit. Build anything—from prototype to production—in minutes."});
})

app.listen(port, () => {
    console.log("Servidor Activo: " + port);
})