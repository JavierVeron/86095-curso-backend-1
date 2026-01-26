const { log } = require("console");
const fs = require("fs");

// Operador exponencial
/* const valor = 10;
const valorExpo = valor ** 3;
console.log(valorExpo); */

// Array includes
/* const nombres = ["Marta", "Fernanda", "Cielo", "Nicolas"]
const existe = nombres.includes("Cielo");
console.log(existe); */


// Object entries, keys y values
/* const producto = {id:1, nombre:"Coca Cola", precio:4000, categoria:"bebidas"};
console.log("Objeto (original)");
console.log(producto);
console.log("Entries:");
console.log(Object.entries(producto));
console.log("Keys:");
console.log(Object.keys(producto));
console.log("Values:");
console.log(Object.values(producto)); */


// Operador spread
/* const nombres = ["Marta", "Fernanda", "Cielo", "Nicolas"]
const nombres2 = [...nombres]; // Creo un nuevo array con los elementos del array "nombres"
nombres[0] = "Alvaro";
nombres2[0] = "Bianca";
console.log(nombres);
console.log(nombres2); */

// Operador rest
// ej. función de suma tradicional
/* function sumar(valor1, valor2) {
    return valor1 + valor2
} */

// ej. función de suma con operador rest
/* function sumar(...valores) {
    //console.log(valores);
    
    let total = 0;

    for (const elemento of valores) {
        total += elemento;
    }

    return total;
}

let resultado = sumar(20, 50, 30, 50, 60);
console.log("Resultado: " + resultado); */


// Métodos de Strings
/* let texto = "Inicio;La Empresa;Quienes Somos;Contacto";
console.log("Longitud:", texto.length);
console.log("Tiene letra 'a':", texto.includes("v"));
console.log("Quitando espacios:", texto.trim());
console.log("Quitando espacios adelante:", texto.trimStart());
console.log("Quitando espacios atras:", texto.trimEnd());
console.log("Convertir todo a Mayúsculas:", texto.toUpperCase());
console.log("Convertir todo a Minúsculas:", texto.toLowerCase());
console.log("Convertir a Array");
console.log(texto.split(";"));
const arrayTextos = [ 'Inicio', 'La Empresa', 'Quienes Somos', 'Contacto' ];
const stringArrayTextos = arrayTextos.join(";");
console.log(stringArrayTextos); */


// Dynamic import
/* const importacion = async () => {
    return await import('./sumar.js');
}

importacion()
.then(resultado => {
    console.log(resultado.sumar(20, 100));
}) */



// Promesas (tiene 3 estados)
// Pendiente (estado por defecto)
// Completada (fullfilled)
// Rechazada (rejected)

/* const operacion = () => {
    return new Promise((resolve, rejected) => {
        //console.log("Promesa pendiente");
        //resolve("Vamos al Cine"); // paso de estado "pending" a "fullfilled" (completada)
        rejected("No puedo ir, porque... bla bla bla"); // paso de estado "pending" a "rejected" (rechazada)
    })
}

operacion()
.then(resultado => {
    console.log("Promesa completada!");
    console.log(resultado);
})
.catch(motivo => {
    console.log("Promesa rechazada!");
    console.log(motivo);
}) */

// Otro ejemplo con validación de datos
/* const vamosACenar = (precio, medio) => {
    return new Promise((resolve, rejected) => {
        if (precio > 50 && medio == "presencial") {
            rejected("No puedo ir, porque es muy caro para mi");
        } else if (precio <= 50 && medio == "presencial") {
            resolve("Vamos a Cenar!");
        } else if (medio == "uber eats") {
            resolve("Nos juntamos a Centar, pedimos por Uber Eats!");
        }
    })
}

vamosACenar(70, "uber eats")
.then(resultado => {
    //console.log("Promesa completada!");
    console.log(resultado);
})
.catch(motivo => {
    //console.log("Promesa rechazada!");
    console.log(motivo);
}) */


// Callbacks
const arrayNumeros = [20, 50, 33, 47, 60];
// Utilizando método Filter
/* const arrayNumerosPares = arrayNumeros.filter(item => {
    if (item%2 == 0) {
        return item
    }
}); */

// Utilizando método forEach
/* const arrayNumerosPares = [];

arrayNumeros.forEach(item => {
    if (item%2 == 0) {
        arrayNumerosPares.push(item);
    }
}) */

// Utilizando método Filter (más simplificado)
/* const arrayNumerosPares = arrayNumeros.filter(item => item%2 == 0); */

//console.log(arrayNumerosPares);

// Ejemplo de callbacks
/* const archivo = "archivo.txt";
fs.writeFile(archivo, "Hola #2", (error, resultado) => {
    if (error) {
        console.log("No se pudo crear el archivo!");
        return false;
    }

    console.log("Se creó el archivo!");
    
    fs.readFile(archivo, "utf-8", (error, resultado) => {
        if (error) {
            console.log("No se pudo leer el archivo!");
            return false;
        }

        console.log(resultado);
    })
}) */


// Repaso de Promesas
/* const divivir = (valor1, valor2) => {
    return new Promise((completada, rechazada) => {
        if (valor2 == 0) {
            rechazada("No se pude dividir por cero!")
        }

        completada(valor1 / valor2);
    })
}

divivir(20, 5)
.then(resultado => {
    console.log("División: " + resultado);

    return "Fin de la operación"
})
.then(resultado => {
    console.log("Otro resultado en .then()");
    console.log(resultado);
})
.catch(resultado => {
    console.log(resultado);
})
.finally(() => {
    console.log("Operación terminada!");
}) */


// Consumo de APIS
/* fetch("https://api.escuelajs.co/api/v1/products")
.then(response => response.json())
.then(data => {
    const productosBaratos = data.filter(item => item.price < 20);
    console.log(productosBaratos);
    fs.writeFile("archivo.txt", JSON.stringify(productosBaratos), (error, resultado) => {
        console.log("Se guardaron los resultados!");
    })
    fs.writeFile("archivo.json", JSON.stringify(productosBaratos), (error, resultado) => {
        console.log("Se guardaron los resultados!");
    })
})
.catch(resultado => {
    console.log("Error en el acceso de la API!");
}) */


// Sincronismo y Asincronismo
// FIFO (First IN First OUT) o PEPS (PRIMERO ENTRADO PRIMERO SALIDO) => [COLAS o QEUE]
// LIFO (Last IN First OUT)o UEPS (ULTIMO ENTRADO PRIMERO SALIDO) => [PILAS o STACK]
// Ejecución de forma síncrona (ejecución secuencial, una proceso a continuación de otro proceso)
/* console.log("Inicio de Programa");
console.log("Mitad de Programa");
console.log("Fin de Programa"); */

// Ejecución de forma asíncrona
/* console.log("Inicio de Programa");

setTimeout(() => {
    console.log("Mitad de Programa #1"); // se ejecutó de forma asíncrona (independiente)
}, 4000)

setTimeout(() => {
    console.log("Mitad de Programa #2"); // se ejecutó de forma asíncrona (independiente)
}, 3000)

setTimeout(() => {
    console.log("Mitad de Programa #3"); // se ejecutó de forma asíncrona (independiente)
}, 2000)

console.log("Fin de Programa"); */


// Ejemplo de funcion síncrona
/* function funA() {
    console.log(1);
    funB();
    console.log(2);    
}

function funB() {
    console.log(3);
    funC();
    console.log(4);    
}

function funC() {
    console.log(5);
}

funA(); */

// Async / Await => Solamente podes utilizar el prefijo "await" en función asíncronas "async"
const consumoAPI = async () => {
    const response = await fetch("https://api.escuelajs.co/api/v1/products");
    const data = await response.json();
    console.log(data);
}

consumoAPI();