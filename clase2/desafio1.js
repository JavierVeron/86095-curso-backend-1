/* Realizar una función que calcule el MCI (Indice de Masa Corporal) donde se pasen los parámetros (altura y peso) y esta nos devuelva 2 consoles.
el primero con el indice (expresado en %) y el segundo mi estado de salud, represetando de la siguiente forma:

Cálculo del índice de masa corporal => [es el peso dividido la altura al cuadrado]

[error] => Peso inferior al normal 	Menos de 18.5
[info] => Normal 	18.5 – 24.9
[advertencia] => Peso superior al normal 	25.0 – 29.9
[eror] => Obesidad 	Más de 30.0 

Salidas:
Tu MCI es: 24.24%
[warn] Peso superior al normal

Tiempo de resolución: 20 minutos

Observaciones:
- Funciones con parámetros
- Calculo matemáticos
- Uso de if y else if
- Uso de consoles */

/* function calcularIMC(peso, altura) {
    let mci = peso / (altura * altura);

    return mci
}

function estadoSalud(mci) {
    if (mci < 18.5) {
        return "Inferior al normal"
    } else if (mci >= 18.5 && mci <= 24.9) {
        return "Normal"
    } else if (mci >= 25 && mci <= 29.9) {
        return "Superior al normal"
    } else {
        return "Obesidad"
    }
}

let resultado = calcularIMC(55, 1.76);
console.log("Tu MCI es: " + resultado.toFixed(2));
console.log(estadoSalud(resultado)); */


