// Operador Nullish
// Validación normal en JS
/* console.log("hola" ? "Es válido!" : "No es válido!");
console.log("" ? "Es válido!" : "No es válido!");
console.log(1000 ? "Es válido!" : "No es válido!");
console.log(1 ? "Es válido!" : "No es válido!");
console.log(0 ? "Es válido!" : "No es válido!");
console.log("true" ? "Es válido!" : "No es válido!");
console.log(true ? "Es válido!" : "No es válido!");
console.log("false" ? "Es válido!" : "No es válido!");
console.log(false ? "Es válido!" : "No es válido!"); */

const { log } = require("console");

/* const pregunta = prompt("Como te llamas?");
let nombre; // declarar (pero sin asignación de un valor)
//nombre = "Marta"; // Asignando un valor
//nombre = 1000; // Asignando un valor
let apellido = "Olivares"; // declarar y asignar un valor a la variable apellido */

//console.log(typeof(nombre)); // Typeoff nos devuelve el tipo de dato de una variable

/* console.log(pregunta == null ? "Es null!" : "No es null!");
console.log(NaN ? "NaN es un valor válido!" : "NaN no es un valor válido!");
console.log(nombre == undefined ? "Es undefined!" : "No es undefined!"); */


// Operador ternario
/* let valor = 100;
// Operator ternario con return
let resultado = valor > 100 ? "Es mayor que 100" : "No, no es mayor que 100";
console.log(resultado);
// Es equivalente a la anterior
console.log(valor > 100 ? "Es mayor que 100" : "No, no es mayor que 100"); */

//let nombre;

// Validación con el Operador Nullish
/* console.log("hola" || "No es válido!");
console.log("hola" ?? "No es válido!");
console.log("" || "No es válido!");
console.log("" ?? "No es válido!");
console.log(1000 || "No es válido!");
console.log(1000 ?? "No es válido!");
console.log(1 || "No es válido!");
console.log(1 ?? "No es válido!");
console.log(0 || "No es válido!");
console.log(0 ?? "No es válido!");
console.log("true" || "No es válido!");
console.log("true" ?? "No es válido!");
console.log(true || "No es válido!");
console.log(true ?? "No es válido!");
console.log("false" || "No es válido!");
console.log("false" ?? "No es válido!");
console.log(false || "No es válido!");
console.log(false ?? "No es válido!");
const pregunta = prompt("Como te llamas?");
console.log(pregunta ?? "No es null!");
console.log(NaN ?? "NaN no es un valor válido!");
console.log(nombre ?? "Es undefined!"); */


// Variables privadas en Clases
/* class Persona {
    #nombreCompleto // variable privada de la clase (no se puede acceder desde afuera)
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.#nombreCompleto = this.apellido + ", " + this.nombre
    }

    getNombreCompleto() { // método público
        //return this.#nombreCompleto; // devolver una propiedad privada
        return this.#getNombreCompletoMayusculas(); // ejecutar un método privado
    }

    #getNombreCompletoMayusculas() { // método privado
        return this.#nombreCompleto.toUpperCase();
    }
}

const persona1 = new Persona("Nicolas", "Riveira");
console.log(persona1.nombre);
console.log(persona1.getNombreCompleto()); */


// Repaso de Trim y flat
/* let nombre = "  Marta  ";
console.log(nombre.length);
console.log(nombre.trim());
console.log(nombre.trimStart());
console.log(nombre.trimEnd()); */

// Array flat
/* let numeros = [1, 2, [3, 4, [5, 6, [7, 8]]]];
console.log(numeros);
console.log(numeros.flat(1));
console.log(numeros.flat(2));
console.log(numeros.flat(3)); */


// Funciones con callback
/* const sumar = (val1, val2) => val1 + val2;
const restar = (val1, val2) => val1 - val2;
const multiplicar = (val1, val2) => val1 * val2;
const dividir = (val1, val2) => val1 / val2;

const operacion = (valor1, valor2, fnCallback) => {
    let resultado = fnCallback(valor1, valor2);

    return resultado;
}

let suma = operacion(10, 20, sumar);
console.log("Suma:", suma);
let division = operacion(200, 20, dividir);
console.log("División:", division); */

// Ejemplo de División utilzando Promesas
const dividir = (valor1, valor2) => {
    return new Promise((resolve, rejected) => {
        if (valor2 == 0) {
            rejected("No se puede divivir por 0!");
        }

        resolve(valor1 / valor2);
    })
}

/* dividir(10, 0)
.then(resultado => {
    console.log("Resultado:", resultado);
})
.catch(error => {
    console.log("Error:", error);
}) */

// Replicar el mismo ejemplo utilizando async / await
/* const operacion = async (valor1, valor2) => {
    try {
        let resultado = await dividir(valor1, valor2);
        console.log(resultado);
    } catch (error) {
        console.log("[Error]:", error);
    }
}

operacion(10, 0); */

const resultadoAPI = async () => {
    try {
        const response = await fetch("https://api.escuelajs.co/api/v1/products2");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error en el acceso a la API!");
        console.log("[Error]", error);
    }
}

resultadoAPI();