// Distintos tipos de console
/* console.log("Hola esto es un mensaje que sale en la consola del Navegador!");
console.info("Este es un mensaje tipo informativo!");
console.warn("Este es un mensaje tipo advertencia!");
console.error("Este es un mensaje tipo error!");
//console.clear();
const productos = [
    {id:1, nombre:"Coca Cola", precio:4000, categoria:"gaseosas"},
    {id:2, nombre:"Coca Cola Zero", precio:3800, categoria:"gaseosas"},
    {id:3, nombre:"Pepsi", precio:3500, categoria:"gaseosas"},
    {id:4, nombre:"Pepsi Max", precio:3400, categoria:"gaseosas"}
]
const producto = {id:1, nombre:"Coca Cola", precio:4000, categoria:"gaseosas"};
console.table(productos);
console.table(producto);
console.log(productos);
console.log(producto); */


// Tipos de Datos (Primitivos) => son valor por copia
/* let valor1 = 10 // Number (integer)
let valor2 = 10.5 // Number (float)
let valor3 = "Cielo" // String
let valor4 = true // boolean (true o false)
let valor5 = valor1; => es la copia del valor de la variable "valor1" en "valor5"
console.log(valor1);
console.log(valor5);
valor1 = 20; // asignar un nuevo valor a la variable valor1
console.log(valor1);
console.log(valor5); */

// Tipos de Datos (tipo Objetos) (Objetos y Arrays) => son valor por referencia
// Objetos => se definen con {}
/* const tipoProducto = {tipo:"gaseosa", diet:false}
const producto1 = {id:1, nombre:"Coca Cola", precio:4000, categoria:"bebidas", tipo:tipoProducto};
const producto2 = producto1; // no es la copia, es la referencia al producto1
//console.log(producto1);
//console.log(producto2);
producto1.nombre = "Coca Cola Zero";
//console.log(producto1);
//console.log(producto2);
producto2.precio = 50000;
console.log(producto1);
console.log(producto2);
const producto3 = {...producto1, id:10, imagen:"coca-cola.jpg"}; // utilice el operador spread (...), desparrame todas las propiedades del "producto1" en "producto3" => Es un nuevo objeto
producto3.precio = 30000
console.log(producto1);
console.log(producto3); */

// Arrays => se definen con []
/* const nombres1 = ["Joaquín", "Marta", "Cielo", "Fernanda", "Nicolas"];
const nombres2 = nombres1; // Tengo la referencia del array nombres1 en nombres2
console.log(nombres1);
console.log(nombres2);
nombres1[3] = "Mario";
console.log(nombres1);
console.log(nombres2);
const nombres3 = [...nombres1]; // desparrar todos los elementos del array nombres1 en nombres3 => creo un nuevo array
nombres3[3] = "Santiago";
console.log(nombres1);
console.log(nombres3); */

// Otras formas de crear un array (map, filter, concat => métodos de arrays)

// Concat (concatena arrays)
/*const gatos = ["Amy", "Benita"];
const perros = ["Mora"];
const mascotas = gatos.concat(perros);
console.log(mascotas); */

// Map (generar un nuevo array, a partir de una función callback)
/* const numeros = [2, 4, 6, 8];
//const numerosPor2 = numeros.map(item => item * 2) // versión simplificada, return implicíto
//const numerosPor2 = numeros.map(item => {
    //return (item * 2) + 1;
//}) // versión simplificada, return implicíto
const numerosPor2 = numeros.map(item => ({valorOriginal:item, valorPorDos:item*2, otroValor:"Cualquier cosa"}))
console.log(numeros);
console.log(numerosPor2); */

// Filter (filtrar elemenos de un array)
/* const numeros = [2, 4, 6, 8];
const numerosFiltrados = numeros.filter(item => item > 5);
console.log(numerosFiltrados); */

// let vs const
/* function saludar() {
    alert("Hola a todos!")
} */

/* let saludar = () => { // Esto sería una mala práctica porque puedo pisar la variable y pierdo la función
    alert("Hola a todos!")
} */

/* const saludar = () => { // Esto sería una buena práctica, ya que por definición una constante no puede ser reemplazada
    alert("Hola a todos!")
}

//saludar = "Hola a todos";

saludar(); */

/* const producto = {id:1, nombre:"Coca Cola", precio:4000};
producto.precio = 5000;
console.log(producto);
const productos = ["Coca Cola", "Coca Cola Zero", "Pepsi", "Pepsi Max"];
productos[3] = "Sprite";
console.log(productos); */


// Funciones en JS
// Existen 3 tipos de declaración de funciones
// Opción #1 => función tradicional
/* function sumar(valor1, valor2) {
    return valor1 + valor2
} */

// Opción #2 => función anónima
/* const sumar = function (valor1, valor2) {
    return valor1 + valor2
} */

// Opción #3 => función flecha o arrow function (versión simplificada)
/* const sumar = (valor1, valor2) => {
    return valor1 + valor2
}

let resultado = sumar(10, 20);
console.log("Resultado: " + resultado); */


// Scope (alcance de una variable) o (variable local o variable global)
// Ejemplo #1
/* let valorBase = 10; // Esto sería una variable global

function operacionMatematica(otroValor) {
    return valorBase + otroValor;
} */

// Ejemplo #2
/* let valorBase = 5; // Esto sería una variable global

function operacionMatematica(otroValor) {
    let valorBase = 10; // Esto sería una variable local (el alcance de la variable solo sería dentro de este bloque)
    return valorBase + otroValor;
}

let variableX = 20;
let resultado = operacionMatematica(20);
console.log("Valor Base: " + valorBase);
console.log("Otro Valor: " + variableX);
console.log("Resultado: " + resultado); */


// Template Strings o Plantilla literal
/* let nombre = "Vladimir"
let apellido = "Gonzalez";
let edad = 25;
let nombreCompleto = "Mi nombre es " + (apellido + ", " + nombre).toUpperCase() + " (" + edad + ")";
//let nombreCompleto2 = `Mi nombre es ${apellido.toUpperCase()}, ${nombre.toUpperCase()} (${edad})`; // template string
let nombreCompleto2 = `Mi nombre es ${(apellido + ", " + nombre).toUpperCase()} (${edad})`; // template string
console.log(nombreCompleto);
console.log(nombreCompleto2); */


// Clases (tipo de dato que contiene propiedades y métodos)
class Persona {
    constructor(valor1, valor2, valor3, valor4) {
        this.nombre = valor1; // Estos son propiedades (serían las variable)
        this.apellido = valor2;
        this.sexo = valor3;
        this.edad = valor4;
        this.especie = "humano"; // valor fijo
        this.dormido = false;
        this.comido = false;
        Persona.personasCreadas++; // modificando mi variable estática (por cada instancia creada de la clase Persona)
    }

    static personasCreadas = 0; // variable estática

    dormir() { // métodos (serían las funciones)
        console.log("Está durmiendo...");
        this.dormido = true;
    }

    comer() {
        console.log("Está comiendo...");
        this.comido = true;
    }

    darNombre() {
        console.log(this.nombre + " " + this.apellido);
    }

    darEdad() {
        if (this.sexo == "femenino") {
            this.edad = this.edad - 3;
        }

        console.log(this.edad + " años");
    }

    cuantasPersonasCreadas() {
        return Persona.personasCreadas;
    }
}

const persona1 = new Persona("Cielo", "Ferrer", "femenino", 24);
const persona2 = new Persona("Mario", "Lima", "masculino", 25);
console.log(persona1);
console.log(persona2);
persona1.comer();
persona2.dormir();
console.log(persona1);
console.log(persona2);
persona1.darEdad();
persona2.darEdad();
console.log(persona1.nombre);
persona1.darNombre();
console.log("Cantidad: " + persona1.cuantasPersonasCreadas());
console.log("Cantidad: " + persona2.cuantasPersonasCreadas());