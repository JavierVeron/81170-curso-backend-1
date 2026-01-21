import express from "express"
import mongoose from "mongoose"
import handlebars from "express-handlebars"
import __dirname from "./utils.js"
import userRouter from "./routes/user.router.js"
//import { userModel } from "./models/user.model.js";
import { studentModel } from "./models/student.model.js";
import { courseModel } from "./models/course.model.js";
import { orderModel } from "./models/order.model.js";
import studentRouter from "./routes/student.router.js";

const app = express();
const port = 8080;
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");
app.use("/api/users", userRouter);
app.use("/students", studentRouter);

app.listen(port, () => {
    console.log("Servidor conectado: " + port);
});

// For..of solamente sirve para recorrer arrays
/* const productos = [
    {id:1, nombre:"Coca1"},
    {id:2, nombre:"Coca2"},
    {id:3, nombre:"Coca3"},
]

for (const item of productos) {
   console.log(item.nombre);  
} */  

/* for (let i=1; i<=3000; i++) {
    await userModel.insertOne({firstName:"Juan"+i, lastName:"Perez"+i, email:"juan"+i+"."+"perez"+i+"@gmail.com",gender:"Masculino"});
}

console.log("Se cargaron todos los Usuarios!"); */

// Trabajo con Mongo de forma asíncrona
const environment = async () => {
    await mongoose.connect("mongodb+srv://javierveron:Javier123!@codercluster.d33hyf3.mongodb.net/?appName=CoderCluster");
    /* let response = await userModel.find({firstName:"Juan2855"}).explain('executionStats');
    console.log(response); */

    // Agregar estudiantes
    /* await studentModel.insertMany([
        {nombre:"Leandro", apellido:"Cruz", email:"prueba@gmail.com", genero:"Masculino"},
        {nombre:"Ricardo", apellido:"Cabral", email:"prueba@gmail.com", genero:"Masculino"},
        {nombre:"Tiara", apellido:"Ricau", email:"prueba@gmail.com", genero:"Femenino"},
        {nombre:"Angelo", apellido:"Uanini", email:"prueba@gmail.com", genero:"Masculino"},
        {nombre:"Brian", apellido:"Letowski", email:"prueba@gmail.com", genero:"Masculino"},
        {nombre:"Cintia", apellido:"Hardy", email:"prueba@gmail.com", genero:"Femenino"}
    ]); */

    // Agregar cursos
    /* await courseModel.insertMany([
        {nombre:"Backend I", dificultad:"intermedio", profesor:"Javier Verón"},
        {nombre:"Backend II", dificultad:"intermedio", profesor:"Nora Saucedo"},
        {nombre:"Backend III", dificultad:"avanzado", profesor:"Niko Seguro"}
    ]) */

    // Agregar uno o más cursos a algunos estudiantes
    /* let estudiante = await studentModel.findOne({_id:"697004cf39a5d5df88f10bdc"});
    console.log(estudiante);
    let curso = await courseModel.find({_id:"69700594dc3753d3fe2626d8"});
    console.log(curso);
    estudiante.cursos.push({curso:"69700594dc3753d3fe2626d8"});
    await studentModel.updateOne({_id:"697004cf39a5d5df88f10bdc"}, estudiante); */
    
    // Vamos a buscar el Usuario
    /* let estudiante = await studentModel.findOne({_id:"697004cf39a5d5df88f10bdc"}).populate("cursos.curso");
    //console.log(JSON.stringify(estudiante, null, "\t"));
    console.log(estudiante.cursos); */
    
    // Vamos a agregar unas ordenes
    /* await orderModel.insertMany([
        {nombre:"Muzzarella", precio:40000, tamano:"mediana", cantidad:2},
        {nombre:"Muzzarella con jamón", precio:60000, tamano:"grande", cantidad:3},
        {nombre:"Napolitana", precio:50000, tamano:"mediana", cantidad:4},
        {nombre:"Muzzarella", precio:80000, tamano:"grande", cantidad:2},
        {nombre:"Muzzarella con jamón", precio:50000, tamano:"mediana", cantidad:3},
        {nombre:"Muzzarella", precio:30000, tamano:"chica", cantidad:4},
        {nombre:"Napolitana", precio:30000, tamano:"chica", cantidad:2},
        {nombre:"Muzzarella", precio:30000, tamano:"chica", cantidad:3}
    ]) */

    /* let ordenes = await orderModel.aggregate([
        {
            $match:{tamano:"chica"}
        },
        {
            $group:{_id:"$nombre", suma:{$sum:("$cantidad")}}
        },
        {
            $project:{
                "_id":0,
                ordenes:"$ordenes"
            }
        },
        {
            $merge:{
                into:"reports"
            }
        }
    ]);
    //console.log(ordenes); */
}

environment();