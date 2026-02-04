/* Realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual. Posteriormente leer el archivo y mostrar el contenido por consola. 
Utilizar el módulo fs y sus operaciones de tipo callback. */

import fs from "fs";

const operacion = () => {
    const fecha = new Date();
    const fechaActual = `${fecha.getDate()}-${fecha.getMonth()+1}-${fecha.getFullYear()} ${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;
    //console.log(fechaActual);
    const nombreArchivo = "fecha.txt";

    fs.writeFile(nombreArchivo, fechaActual, (error, resultado) => {
        if (error) {
            console.log("Error! No se pudo crear el archivo!");
        }

        fs.readFile(nombreArchivo, "utf-8", (error, resultado) => {
            if (error) {
                console.log("Error! No se pudo leer el archivo!");
            }

            console.log(resultado);            
        });
    })
}

operacion();