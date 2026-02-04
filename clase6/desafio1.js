/* Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20. Indicar por consola la finalización de esta operación con un mensaje.
Mediante el uso de Promesas, crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave será la cantidad de veces que salió dicho número. Representar por consola los resultados.

Nota: Considerar que esta operación debe realizarse de forma asíncrona.

Observaciones: Math.random(), promises, async/await

Ejemplo: [1, 10, 10, 15, 20] => {1:1, 10:2, 15:1, 20:1} */

const generarNumeroRandom = (min, max) => {
    return (Math.round(Math.random() * (max-1))) + min
}

const generarArrayNumerosAleatorios = () => {
    const resultados = [];    

    for(let i=0; i<10000; i++) {
        resultados.push(generarNumeroRandom(1, 20));
    }

    return resultados;
}

const generarNumeros = () => {
    return new Promise((res) => {
        const numerosAleatorios = generarArrayNumerosAleatorios();
        console.log(numerosAleatorios);
        
        let numeros = {};

        numerosAleatorios.forEach(item => {
            const valor = numerosAleatorios.filter(item2 => item2 == item).length            
            numeros[item] = valor;
        })

        res(numeros)
    })
}

const operacion = async () => {
    const resultado = await generarNumeros();
    console.log(resultado);
}

operacion();