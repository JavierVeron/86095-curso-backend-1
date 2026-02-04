/* Realizar un programa que utilice la  dependencia momentjs  (deberá instalarse por npm install).
Debe contar con una variable que almacene la fecha actual (utilizar moment())
Debe contar con una variable que almacene sólo la fecha de tu nacimiento (utilizar moment).
Validar con un if que la variable contenga una fecha válida (utilizar el método isValid());
Finalmente, mostrar por consola cuántos días han pasado desde que naciste hasta el día de hoy. (utilizar el método diff()
Extra: Cambia tu moment a la versión 1.6.0, al no ser la misma versión mayor, nota el cambio al correr el programa. */

import moment from "moment";

const fechaActual = moment();
//console.log(fechaActual);
const fechaNacimiento = moment("1997-03-19"); // Solo es posible con el formato AAAA-MM-DD
//const fechaNacimiento = moment("19-03-1997");
//console.log(fechaNacimiento);

if (fechaNacimiento.isValid()) {
    console.log(fechaNacimiento.format("DD-MM-YYYY"));    
    console.log("Fecha válida");
} else {
    console.log("Fecha inválida!");
}

// Calcular los dias pasados desde el nacimiento
const diferenciaDias = fechaActual.diff(fechaNacimiento, "days");
console.log(diferenciaDias);
const diferenciaAnios = fechaActual.diff(fechaNacimiento, "years");
console.log(diferenciaAnios);


