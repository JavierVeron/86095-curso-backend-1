import express from "express"

const app = express();
const port = 8080;
app.use(express.json()); // Capturar información que viaje en el Body
app.use(express.urlencoded({extended:true})); // Capturar información que viaje por la Url

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

let productos = [
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

 
/* Desafio: Mi primera API de Productos (CRUD) */
app.get("/", (request, response) => {
    response.send(`<html>
    <body>
    <h1 style='color:white; background-color:black; padding:10px; font-weight:40px; text-transform:uppercase;'>Coderhouse</h1>
    <h3>Curso de Backend I</h3>
    <p><a href="http://localhost:8080/productos">Productos</a></p>
    </body>
    </html>`); // Devuelvo un contenido HTML
})

function limitArray(unArray, limit) {
    const arrayOutput = [];

    for (let i=0; i<limit; i++) {
        if (i >= unArray.length) {
            break;
        }
        
        arrayOutput.push(unArray[i]);
    }

    return arrayOutput;
}

function sortArray(unArray, order) {
    unArray.sort((idx, item) => {
        if (order.toLowerCase() == "asc") {
            if (idx.id > item.id) {
                return 1
            }

            if (idx.id < item.id) {
                return -1
            }
        } else if (order.toLowerCase() == "desc") {
            if (idx.id > item.id) {
                return -1
            }

            if (idx.id < item.id) {
                return 1
            }
        }
    })

    return unArray;
}
// Obtengo todos los Productos (array de objetos)
app.get("/productos", (request, response) => { // Request queries
    //const queries = request.query;
    /* const limit = request.query.limit;
    const order = request.query.order; */ // Opción #1
    const {limit, order} = request.query;
    let arrayOutput;

    if (limit && order) {
        arrayOutput = limitArray(productos, limit);
        arrayOutput = sortArray(arrayOutput, order);
    } else if (limit && !order) {
        arrayOutput = limitArray(productos, limit);
    } else if (!limit && order) {
        arrayOutput = sortArray(productos, order);
    } else {
        arrayOutput = productos;
    }
    
    response.send(arrayOutput); // Devuelvo un JSON (array de productos)
})
// Obtengo solo 1 Producto (objeto)
app.get("/productos/:id", (request, response) => { // Request params
    /* const params = request.params;
    const id = params.id; */
    //const id = request.params.id; // Opción #1
    const {id} = request.params; // Opción #2

    if (!Number.isInteger(parseInt(id))) { // Validar mi parámetro Id
        response.status(400).send({status:"error", message:"El ID debe ser un número entero!"});
    }

    const producto = productos.find(item => item.id == id);

    if (producto) {
        response.send(producto); // Devulevo un JSON (objeto de producto)
    } else {
        response.status(400).send({status:"error", message:"No existe el Producto #" + id});
    }
})

const generarId = () => {
    return productos.length + 1;
}

// Crear un nuevo Producto
app.post("/productos", (request, response) => { // Request body
    /* const nombre = request.body.nombre; // Opción #1
    const precio = request.body.precio; */
    const {nombre, precio} = request.body; // Opción #2
    const nuevoProducto = {id:generarId(), nombre:nombre, precio:precio};
    productos.push(nuevoProducto);

    response.status(201).send(nuevoProducto);
})

// Actualizar un Producto (existente)
app.put("/productos/:id", (request, response) => {
    const {id} = request.params; // Opción #2

    if (!Number.isInteger(parseInt(id))) { // Validar mi parámetro Id
        response.status(400).send({status:"error", message:"El ID debe ser un número entero!"});
    }

    const {nombre, precio} = request.body;
    const producto = productos.find(item => item.id == id);

    if (producto) {
        producto.nombre = nombre;
        producto.precio = precio;

        response.send(producto);
    } else {
        response.status(400).send({status:"error", message:"No existe el Producto #" + id});
    }    
})

// Eliminar un Producto (existente)
app.delete("/productos/:id", (request, response) => {
    const {id} = request.params; // Opción #2

    if (!Number.isInteger(parseInt(id))) { // Validar mi parámetro Id
        response.status(400).send({status:"error", message:"El ID debe ser un número entero!"});
    }

    const producto = productos.find(item => item.id == id);

    if (producto) {// [1, 2, 3, 4] => 2 => [1, 3, 4]
        productos = productos.filter(item => item.id != id);

        response.send({status:"ok", message:"Se eliminó el Producto #" + id});
    } else {
        response.status(400).send({status:"error", message:"No existe el Producto #" + id});
    }   
})