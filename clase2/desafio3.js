/* Se creará una clase que permitirá llevar cuentas individuales según cada responsable.

Definir clase Contador
La clase se creará con un nombre, representando al responsable del contador.
El contador debe inicializarse en 0
Debe existir una variable estática que funcione como contador global de todas las instancias de contador creadas.
Definir el método getResponsable, el cual debe devolver el responsable de dicho contador.
Definir el método contar, el cual debe incrementar, tanto su cuenta individual, como la cuenta global.
Definir el método getCuentaIndividual, el cual debe devolver sólo la cuenta individual del contador
Definir el método getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.
Realizar prueba de individualidad entre las instancias.

Observaciones:
- utilizar clases
- utilizar constructor, propiedades y variable estáticas
- utilizar métodos */

/* Comentario de una sola línea */

class Contador {
    constructor(nombre) {
        this.responsable = nombre;
        this.cuentaIndividual = 0;
    }

    static cuentaGlobal = 0; // propiedad estática (variable que tienen en común todas las instancias de la Clase Contador)

    getResponsable() {
        return this.responsable;
    }

    contar() {
        this.cuentaIndividual++;
        Contador.cuentaGlobal++;
    }

    getCuentaIndividual() {
        return this.cuentaIndividual;
    }

    getCuentaGlobal() {
        return Contador.cuentaGlobal;
    }
}

const contador1 = new Contador("Contador #1");
const contador2 = new Contador("Contador #2");
const contador3 = new Contador("Contador #3");

contador1.contar();
contador1.contar();
contador2.contar();
contador2.contar();
contador2.contar();
contador3.contar();
contador3.contar();
contador3.contar();
contador3.contar();
console.log(contador1.getResponsable());
console.log("Conteo: " + contador1.getCuentaIndividual());
console.log(contador2.getResponsable());
console.log("Conteo: " + contador2.getCuentaIndividual());
console.log(contador3.getResponsable());
console.log("Conteo: " + contador3.getCuentaIndividual());
console.log("Contador Global: " + contador3.getCuentaGlobal());