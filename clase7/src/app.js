import express from "express"

const app = express();
const port = 8080;
app.listen(port, () => {
    console.log("Servidor Activo: " + port);
})

/* app.get("/", (request, response) => {
    response.send("Hola!!!"); // Devuelvo un String
}) */

/* app.get("/", (request, response) => {
    response.send(`<html>
    <body>
    <h1 style='color:white; background-color:black; padding:10px; font-weight:40px; text-transform:uppercase;'>Coderhouse</h1>
    <h3>Curso de Backend I</h3>
    </body>
    </html>`); // Devuelvo un contenido HTML
}) */

const productos = [
    {id:1, nombre:"Coca Cola", precio:4000},
    {id:2, nombre:"Coca Cola Zero", precio:3800},
    {id:3, nombre:"Pepsi", precio:3900},
    {id:4, nombre:"Pepsi Max", precio:3700}
]

/* app.get("/", (request, response) => {
    response.send(productos); // Devuelvo un Array
}) */

/* app.get("/", (request, response) => {
    response.send({status:"ok", data:productos}); // Devuelvo un Objeto
}) */

 
/* Desafio: Mi primera API de Productos */
app.get("/", (request, response) => {
    response.send(`<html>
    <body>
    <h1 style='color:white; background-color:black; padding:10px; font-weight:40px; text-transform:uppercase;'>Coderhouse</h1>
    <h3>Curso de Backend I</h3>
    <p><a href="http://localhost:8080/productos">Productos</a></p>
    </body>
    </html>`); // Devuelvo un contenido HTML
})

app.get("/productos", (request, response) => {
    response.send(productos); // Devuelvo el array de productos
})

app.get("/productos/:id", (request, response) => {
    /* const params = request.params;
    const id = params.id; */
    //const id = request.params.id; // Opción #1
    const {id} = request.params; // Opción #2

    if (!Number.isInteger(parseInt(id))) { // Validar mi parámetro Id
        response.status(400).send({status:"error", message:"El ID debe ser un número entero!"});
    }

    const producto = productos.find(item => item.id == id);

    if (producto) {
        response.send(producto);
    } else {
        response.status(400).send({status:"error", message:"No existe el Producto #" + id});
    }
})