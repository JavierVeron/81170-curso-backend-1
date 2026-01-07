/* Insertar un Documento */
db.usuarios.insertOne({nombre:"Esteban", apellido:"Vaquera Pareja", email:"esteban.vp@gmail.com"})

/* Insertar varios Documentos */
db.usuarios.insertMany([
    {nombre:"Esteban", apellido:"Vaquera Pareja", email:"esteban.vp@gmail.com"},
    {nombre:"Leandro", apellido:"Cruz", email:"leandro.cruz@gmail.com"},
    {nombre:"Tiara", apellido:"Ricau", email:"tiara.ricau@gmail.com"}
])


/* Desafio de Mascotas */
/* Crear 3 documentos de Mascotas */
db.mascotas.insertMany([
    {nombre:"Amy", especie:"gato", edad:12},
    {nombre:"Benita", especie:"gato", edad:11},
    {nombre:"Mora", especie:"perro", edad:10}
])

/* Buscar mascotas por su especie */
db.mascotas.find({especie:"gato"})

/* Contar documentos */
db.mascotas.find({especie:"gato"}).count()


/* Desafio de Estudiantes */
db.estudiantes.insertMany([
    {nombre:"Ricardo", apellido:"Cabral", curso:"Backend I", edad:22, correo:"ricardo.cabral@gmail.com", sexo:"M"},
    {nombre:"Esteban", apellido:"Vaquera Pareja", curso:"Backend II", edad:24, correo:"esteban.vp@gmail.com", sexo:"M"},
    {nombre:"Tiara", apellido:"Ricau", curso:"Backend II", edad:23, correo:"tiara.ricau@gmail.com", sexo:"F"},
    {nombre:"Nora", apellido:"Saucedo", curso:"Backend I", edad:25, correo:"nora.saucedo@gmail.com", sexo:"F"},
    {nombre:"Leandro", apellido:"Cruz", curso:"Backend III", edad:20, correo:"leandro.cruz@gmail.com", sexo:"M"},
    {nombre:"Agustin", apellido:"Goette", correo:"agustin.goette@gmail.com"}
])

/* Buscar todos los estudiantes */
db.estudiantes.find()

/* Buscar estudiantes de sexo M */
db.estudiantes.find({sexo:"M"})

/* Obtener el conteo total */
db.estudiantes.countDocuments()

/* Buscar el conteo de estudiantes de sexo F */
db.estudiantes.find({sexo:"F"}).count()
db.estudiantes.countDocuments({sexo:"F"})

/* Agregamos otros 5 estudiantes */
db.estudiantes.insertMany([
    {nombre:"Angelo", apellido:"Uanini", curso:"Backend III", edad:23, correo:"angelo.uanini@gmail.com", sexo:"M", carrera:"FullStack"},
    {nombre:"Axel", apellido:"Camara", curso:"Backend II", edad:24, correo:"axel.camara@gmail.com", sexo:"M", carrera:"FullStack"},
    {nombre:"Cintia", apellido:"Hardy", curso:"Backend III", edad:23, correo:"cintia.hardy@gmail.com", sexo:"F", carrera:"Backend"},
    {nombre:"Lucas", apellido:"Sanchez", curso:"Backend I", edad:25, correo:"lucas.sanchez@gmail.com", sexo:"M", carrera:"FrontEnd"},
    {nombre:"Leandro", apellido:"Cruz", curso:"Backend III", edad:20, correo:"leandro.cruz@gmail.com", sexo:"M", carrera:"FullStack"},
    {nombre:"Juan Perez"}
])

/* Obtener todos los estudiantes */
db.estudiantes.find()

/* Ordenar los estudiantes por nombre */
db.estudiantes.find().sort({nombre:1})

/* Proyecto solamente nombre y apellido de los estudiantes */
db.estudiantes.find({}, {nombre:1, apellido:1}).sort({nombre:1})

/* Salto 2 documentos */
db.estudiantes.find({}, {nombre:1, apellido:1}).sort({nombre:1}).skip(2)

/* Limitar el resultado a 3 documentos */
db.estudiantes.find({}, {nombre:1, apellido:1}).sort({nombre:1}).skip(2).limit(3)

/* Actualizar un Documento */
db.estudiantes.updateOne({apellido:"Vaquera Pareja"}, {$set:{"apellido":"Vaquera"}})

/* Agregar un campo (si no existe te lo agrega y si existe te modifica el valor existente) */
db.estudiantes.updateOne({"_id":ObjectId("695d917ce1eb53f494ec0be6")}, {$set:{"estado":"activo"}})

/* Incrementar la edad de un estudiante en 3 años */
db.estudiantes.updateOne({"_id":ObjectId("695d917ce1eb53f494ec0be6")}, {$inc:{"edad":3}})

/* Borrar los campos definido */
db.estudiantes.updateOne({"_id":ObjectId("695d9398e1eb53f494ec0bf1")}, {$unset:{"nombre"}})

/* Eliminar un Documento */
db.estudiantes.deleteOne({"_id":ObjectId("695d9398e1eb53f494ec0bf1")})

/* Eliminar varios Documentos */
db.estudiantes.deleteMany({curso:"Backend III"})


/* Operaciones con Filtros */
/* Crear la colección "clientes" */
db.createCollection("clientes")

/* Insertar clientes en la colección clientes */
db.clientes.insertMany([
    { "nombre" : "Pablo", "edad" : 25 },
    { "nombre" : "Juan", "edad" : 22 },
    { "nombre" : "Lucia", "edad" : 25 },
    { "nombre" : "Juan", "edad" : 29 },
    { "nombre" : "Fede", "edad" : 35 }
])

/* Listar todos los documentos de la colección clientes ordenados por edad descendente. */
db.clientes.find().sort({edad:-1})

/* Listar el cliente más joven. */
db.clientes.find().sort({edad:1}).limit(1)

/* Listar el segundo cliente más joven. */
db.clientes.find().sort({edad:1}).limit(1).skip(1)

/* Listar los clientes llamados 'Juan' */
db.clientes.find({nombre:"Juan"})

/* Listar los clientes llamados 'Juan' que tengan 29 años. */
db.clientes.find({nombre:"Juan", edad:29})
db.clientes.find({$and:[{nombre:"Juan"}, {edad:29}]})

/* Listar los clientes llamados 'Juan' ó 'Lucia'. */
db.clientes.find({$or:[{nombre:"Juan"}, {nombre:"Lucia"}]})

/* Listar los clientes que tengan más de 25 años. */
db.clientes.find({edad:{$gt:25}})

/* Listar los clientes que tengan 25 años ó menos. */
db.clientes.find({edad:{$lte:25}})

/* Listar los clientes que NO tengan 25 años. */
db.clientes.find({edad:{$ne:25}})

/* Listar los clientes que estén entre los 26 y 35 años. */
db.clientes.find({$and:[{edad:{$gte:26}}, {edad:{$lte:35}}]})

/* Actualizar la edad de Fede a 36 años, listando y verificando que no aparezca en el último listado. */
db.clientes.updateOne({nombre:"Fede"}, {$set:{edad:36}})

/* Actualizar todas las edades de 25 años a 26 años, listando y verificando que aparezcan en el último listado */
db.clientes.updateMany({edad:25}, {$set:{edad:26}})

/* Borrar los clientes que se llamen 'Juan' y listar verificando el resultado. */
db.clientes.deleteMany({nombre:"Juan"})

/* Eliminar además todos los documentos de estudiantes que hayan quedado con algún valor. */
db.estudiantes.deleteMany({})