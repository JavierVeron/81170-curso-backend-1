import express from "express"
import mongoose from "mongoose"
import userRouter from "./routes/user.router.js"
import studentRouter from "./routes/student.router.js"
import { studentModel } from "./models/student.model.js"

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/api/users", userRouter);
app.use("/api/students", studentRouter);
app.listen(port, () => {
    console.log("Servidor conectado: " + port);
});

mongoose.connect("mongodb+srv://javierveron:@codercluster.d33hyf3.mongodb.net/?appName=CoderCluster")
.catch(() => {
    console.log("Error! No se pudo conectar a la BD de Mongo Atlas!");
})

/* studentModel.insertMany([
    {nombre:"Leandro", apellido:"Cruz", edad:25, dni:"11222333", curso:"Backend I", nota:10},
    {nombre:"Ricardo", apellido:"Cabral", edad:25, dni:"11222333", curso:"Backend II", nota:9},
    {nombre:"Tiara", apellido:"Ricau", edad:23, dni:"11222333", curso:"Backend III", nota:10},
    {nombre:"Angelo", apellido:"Uanini", edad:25, dni:"11222333", curso:"Backend I", nota:7},
    {nombre:"Brian", apellido:"Letowski", edad:25, dni:"11222333", curso:"Backend II", nota:6},
    {nombre:"Cintia", apellido:"Hardy", edad:23, dni:"11222333", curso:"Backend III", nota:10},
    {nombre:"Claudia", apellido:"Perez", edad:23, dni:"11222333", curso:"Backend I", nota:6},
    {nombre:"Juan", apellido:"Fandiño", edad:25, dni:"11222333", curso:"Backend II", nota:10},
    {nombre:"Leandro", apellido:"Cruz", edad:25, dni:"11222333", curso:"Backend III", nota:10},
    {nombre:"Nicolas", apellido:"Lerech", edad:25, dni:"11222333", curso:"Backend I", nota:9}
])
console.log("Los usuarios se cargaron correctamente!"); */
