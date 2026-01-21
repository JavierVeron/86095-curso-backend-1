/* class Persona {
    constructor(valor1, valor2) {
        this.nombre = valor1; // propiedades (variables)
        this.apellido = valor2;
        this.especie = "humano";
    }

    nombreCompleto() { // método (funciones)
        return this.apellido + ", " + this.nombre;
    }
}

const persona1 = new Persona("Joaquín", "Santamaría");
const persona2 = new Persona("Marta", "Olivares de la Fuente");
console.log(persona1.nombre);
console.log(persona1.apellido);
console.log(persona1.nombreCompleto());
console.log(persona2.nombre);
console.log(persona2.apellido);
console.log(persona2.nombreCompleto()); */

class Auto {
    constructor(valor1="Sin Marca", valor2, valor3=0, valor4, valor5) {
        this.marca = valor1;
        this.modelo = valor2.length>0 ? valor2 : "Sin Modelo";
        this.puertas = valor3;
        this.motor = valor4 ? valor4 : 0;
        this.precio = (valor5) ? valor5 : 0;
        this.vendido = false;
    }

    getInfo() {
        let vendido = this.vendido ? "[VENDIDO]" : "[EN VENTA]";
        return `Marca: ${this.marca}\nModelo: ${this.modelo}\nPuertas: ${this.puertas} puertas\nMotor: ${this.motor} cc\nPrecio: $${this.precio} dólares\nEstado: ${vendido}`;
    }

    vender() {
        this.vendido = true;
    }
}

const auto = new Auto("Chery", "QQ", 5, 1.1, 10000);
auto.vender();
console.log(auto.getInfo());