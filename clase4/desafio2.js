/* Registrador de Ticket de Eventos

Definir clase TicketManager, el cual tendrá un arreglo de eventos que iniciará vacío
La clase debe contar con una variable privada “precioBaseDeGanancia”, la cual añadirá un costo adicional al precio de cada evento.
Debe contar con el método “getEventos” El cual mostrará los eventos guardados.
Debe contar con el método “agregarEvento” El cual recibirá los siguientes parámetros:
nombre
lugar
precio (deberá agregarse un 0.15 del valor original)
capacidad (50 por defecto)
fecha (hoy por defecto)
El método deberá crear además el campo id autoincrementable y el campo “participantes” que siempre iniciará con un arreglo vacío.
Debe contar con un método “agregarUsuario” El cual recibirá:
id del evento (debe existir, agregar validaciones)
id del usuario
El método debe evaluar que el evento exista y que el usuario no haya estado registrado previamente (validación de fecha y capacidad se evitará para no alargar el reto)
Si todo está en orden, debe agregar el id del usuario en el arreglo “participantes” de ese evento.
Debe contar con un método “ponerEventoEnGira” El cual recibirá:
id del evento
nueva localidad
nueva fecha
El método debe copiar el evento existente, con una nueva localidad, nueva fecha, nuevo id y sus participantes vacíos (Usar spread operator para el resto de las propiedades) */

class TicketManager {
    #precioBaseDeGanancia = 0.15;

    constructor() {
        this.eventos = [];
    }

    getEventos() {
        // devolver el array de eventos
        return this.eventos;
    }

    #generarId() {
        // buscar el máximo id del array e incrementar en uno || obtener el total de elementos del array e incrementar en uno
        return this.eventos.length + 1;
    }

    agregarEvento(nombre, lugar, precio, capacidad=50, fecha) {
        // agregar (pushear al array eventos, un nuevo objeto evento)
        const fechaActual = new Date;
        fecha = fecha || `${fechaActual.getDate()}-${fechaActual.getMonth()+1}-${fechaActual.getFullYear()} ${fechaActual.getHours()}:00`;
        const nuevoEvento = {id:this.#generarId(), nombre:nombre, lugar:lugar, precio:(precio + (precio * this.#precioBaseDeGanancia)), capacidad:capacidad, fecha:fecha, participantes:[]};
        this.eventos.push(nuevoEvento);
    }

    agregarUsuario(idEvento, idUsuario) {
        // agregar el usuario al array participantes del evento
        const evento = this.eventos.find(item => item.id == idEvento);

        if (evento) {
            const existeParticipante = evento.participantes.includes(idUsuario);

            if (existeParticipante) {
                console.log("El Participante #" + idUsuario + " ya se encuentra registrado en el Evento #" + idEvento);
            } else {
                if (evento.capacidad > evento.participantes.length) {
                    evento.participantes.push(idUsuario);
                    console.log("Se agregó el Participante #" + idUsuario + " al Evento #" + idEvento);
                } else {
                    console.log("No hay más lugares para el Evento #" +idEvento);
                }
            }
        } else {
            console.log("El Evento #" + idEvento + " no existe!");
        }
    }

    ponerEventoEnGira(idEvento, nuevaLocalidad, nuevaFecha) {
        // agregar un nuevo evento, copiando los datos de un evento existente y tomando los nuevos valores de localidad y fecha
        const evento = this.eventos.find(item => item.id == idEvento);

        if (evento) {
            const nuevoEvento = {...evento, id:this.#generarId(), lugar:nuevaLocalidad, fecha:nuevaFecha, participantes:[]};
            this.eventos.push(nuevoEvento);
            console.log("Se puso en Gira el Evento #" + idEvento);
        } else {
            console.log("El Evento #" + idEvento + " no existe!");
        }
    }
}

const CM = new TicketManager();
CM.agregarEvento("Garrix Americas Tour", "Movistar Arena", 50000, 3, "16-05-2026 19:00"); //idEvento = 1, participantes: []
CM.agregarEvento("Garrix Americas Tour", "Movistar Arena", 50000, 2); //idEvento = 2, participantes: []
CM.agregarUsuario(1, 1); //idEvento 1 se agrega el Usuario 1 => idEvento 1, participantes: [1]
CM.agregarUsuario(1, 2); //idEvento 1 se agrega el Usuario 2 => idEvento 1, participantes: [1, 2]
CM.agregarUsuario(1, 2); // El usuario ya se encuentra registrado
CM.agregarUsuario(1, 3); // ok
CM.agregarUsuario(1, 4); // No hay más lugar
CM.agregarUsuario(2, 3); //idEvento 2 se agrega el Usuario 3 => idEvento 2, participantes: [3]
CM.agregarUsuario(4, 3); // El evento no existe
console.log(CM.getEventos());
CM.ponerEventoEnGira(3, "Estadio Velez Sarfield", "18-05-2026 19:00"); // No existe el Evento
CM.ponerEventoEnGira(1, "Estadio Velez Sarfield", "18-05-2026 19:00"); // Los mismos datos del idEvento 1, pero con la nueva Localidad y nueva Fecha y particpantes en 0
console.log(CM.getEventos());