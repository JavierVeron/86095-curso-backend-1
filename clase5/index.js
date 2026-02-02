// Importando el modulo moment
/* const moment = require("moment");
const myMoment = moment();
console.log(myMoment.toDate());
console.log("Fecha: " + myMoment.date() + "/" + (myMoment.month()+1) + "/" + myMoment.year());
console.log("Hora: " + myMoment.hours() + ":" + myMoment.minutes()); */


// Sincronico vs Asincronico
/* console.log("Comienzo de Tarea"); // Se ejecutó de forma sincrónica

setTimeout(() => {
    console.log("Ejecutando la Tarea #1"); // Se ejecuto de forma asíncrona
}, 3000);

setTimeout(() => {
    console.log("Ejecutando la Tarea #2"); // Se ejecuto de forma asíncrona
}, 2000);

setTimeout(() => {
    console.log("Ejecutando la Tarea #3"); // Se ejecuto de forma asíncrona
}, 1000);

console.log("Fin de Tarea!"); // Se ejecutó de forma sincrónica */


// setTimeout => ejecuta un bloque de código por única vez en un tiempo determinado
/* const saludo1 = setTimeout(() => {
    console.log("Hola Coders!");
}, 3000);
clearTimeout(saludo1); // Detengo la ejecución de este timeOut


// setInterval => ejecuta de forma periódica (no corta) un bloque de código en un tiempo determinado
let contador = 0;
const saludo2 = setInterval(() => {
    console.log("Hola Coders (Interval)!");

    if (contador == 5) {
        clearInterval(saludo2); // Detengo la ejecució de mi Interval
        console.log("Detengo la ejecución de mi Interval!");
    }

    contador++;
}, 2000); */


// Módulo File System
const fs = require("fs");
const archivo = "archivo.txt";

// FS Síncrono
/* fs.writeFileSync(archivo, "Curso de Backend I\n"); // Crear un nuevo Archivo
let contenido = fs.readFileSync(archivo, "utf-8"); // Leer un Archivo
console.log(contenido);
fs.appendFileSync(archivo, "Curso de Backend II\n"); // Adjuntar un nuevo contenido al Archivo (sino existe lo crea, y si existe lo adjunta)
contenido = fs.readFileSync(archivo, "utf-8"); // String
console.log(contenido);

if (fs.existsSync(archivo)) {
    fs.unlinkSync(archivo);
} else {
    console.log("Error! No existe el archivo especificado!");
} */

// ¿Cómo almeceno arrays? (siempre se pisa el archivo con más elementos en el array)
/* const nombreArchivo = "productos.json";
const productos = [];
const producto1 = {id:1, nombre:"Coca Cola", precio:3500};
productos.push(producto1);
fs.writeFileSync(nombreArchivo, JSON.stringify(productos));
//let contenido = fs.readFileSync(archivo, "utf-8"); // String
let contenido = JSON.parse(fs.readFileSync(nombreArchivo, "utf-8")); // Array
//console.log(JSON.parse(contenido));
const producto2 = {id:2, nombre:"Coca Cola Zero", precio:3400};
contenido.push(producto2);
fs.writeFileSync(nombreArchivo, JSON.stringify(contenido));
contenido = JSON.parse(fs.readFileSync(nombreArchivo, "utf-8")); // Array
console.log(contenido); */


// FS con callbacks
/* fs.writeFile(archivo, "Curso de Backend I\n", (error, resultado) => {
    if (error) {
        console.log("Error! No se pudo escribir el archivo!");
        return false;
    }

    console.log("El archivo se creó correctamente!");
    
    fs.readFile(archivo, "utf-8", (error, resultado) => {
        if (error) {
            console.log("Error! No se pudo leer el archivo!");
            return false;
        }

        console.log(resultado);

        fs.appendFile(archivo, "Curso de Backend II\n", (error, resultado) => {
            if (error) {
                console.log("Error! No se pudo actualizar el archivo!");
                return false;
            }

            console.log("El archivo se actualizó correctamente!");

            fs.unlink(archivo, (error, resultado) => {
                if (error) {
                    console.log("Error! No se pudo eliminar el archivo!");
                    return false;
                }

                console.log("El archivo se eliminó correctamente!");
            })
        })
    })
}) */


// FS con Promesas (de forma asíncrona)
// FS con métodos Then y Catch
/* fs.promises.writeFile(archivo, "Curso de Backend I\n")
.then(resultado => {
    console.log("El archivo se creó correctamente!");
})
.catch(error => {
    console.log("Error! No se pudo crear el archivo!");
}) */

/* const operaciones = async () => {
    try {
        await fs.promises.writeFile(archivo, "Curso de Backend I\n");
        console.log("El archivo se creó correctamente!");
        let contenido = await fs.promises.readFile(archivo, "utf-8");
        console.log(contenido);
        await fs.promises.appendFile(archivo, "Curso de Backend II\n");
        console.log("El archivo se actualizó correctamente!");
        await fs.promises.unlink(archivo);
        console.log("El archivo se eliminó correctamente!");
    } catch (error) {
        console.log(error);
    }
}

operaciones(); */


// Consumir una API y el resultado guardarlo en un archivo
const operacionesAPI = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    fs.promises.writeFile("resultadoAPI.json", JSON.stringify(data));
    console.log("El resultado API se ha guardado correctamente!");
}

operacionesAPI();