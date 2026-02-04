/* ¿Cómo lo hacemos? Se creará una clase “UsersManager” que permitirá guardar usuarios en un atributo estático. El usuario se recibirá con una contraseña en string plano, y se deberá guardar la contraseña hasheada con crypto. Utilizar el módulo nativo crypto.
El manager debe contar con los siguientes métodos:
El método “Crear usuario” debe recibir un objeto con los campos:
Nombre
Apellido
Nombre de usuario
Contraseña
El método debe guardar un usuario en un atributo estático llamado “Usuarios”, recordando que la contraseña debe estar hasheada por seguridad
El método “Mostrar Usuarios” imprimirá en consola todos los usuarios almacenados.
El método “Validar Usuario” recibirá el nombre de usuario que quiero validar, seguido de la contraseña,  debe poder leer el json previamente generado con el arreglo de usuarios y hacer la comparación de contraseñas, Si coinciden el usuario y la contraseña, devolver un mensaje “Logueado”, caso contrario indicar error si el usuario no existe, o si la contraseña no coincide. */

// Importar el modulo nativo crypto
const crypto = require("crypto");

// Ejemplo
/* const miPassword = "holahola"; // Acá defino mi contraseña
const hash = crypto.createHash("sha256"); // Acá defino el nivel encryptación
hash.update(miPassword); // Encripto la contraseña
console.log(hash.digest("hex")); // Devuelvo la contraseña encriptada en formato hexadecimal */




class UsersManager {
    static usuarios = [];

    generarId() {
        return UsersManager.usuarios.length + 1;
    }

    generarContrasena(password) {
        const hash = crypto.createHash("sha256");
        hash.update(password);
        
        return hash.digest("hex");
    }

    crearUsuario(nombre, apellido, usuario, contrasena) {
        const contrasenaEncriptada = this.generarContrasena(contrasena);
        const nuevoUsuario = {id:this.generarId(), nombre:nombre, apellido:apellido, usuario:usuario, contrasena:contrasenaEncriptada};
        UsersManager.usuarios.push(nuevoUsuario);
        console.log("El usuario se ha agregado correctamente!");
    }

    mostrarUsuarios() {
        UsersManager.usuarios.forEach(item => {
            console.log(item);
        })
    }

    validarUsuario(user, pass) {
        const usuario = UsersManager.usuarios.find(item => item.usuario == user);

        if (usuario) {
            const contrasenaEncriptada = this.generarContrasena(pass);

            if (usuario.contrasena == contrasenaEncriptada) {
                console.log("Usuario Logueado!");
            } else {
                console.log("No coincide la Contraseña!");
            }
        } else {
            console.log("No existe el Usuario!");
        }
    }

}

const UM = new UsersManager();
UM.crearUsuario("Marta", "Olivares", "marOlivares", "11");
UM.crearUsuario("Ambar", "Ramos", "ambarR", "112233");
UM.crearUsuario("Bianca", "Balbuena", "bianBalbuena", "112233");
UM.mostrarUsuarios();
UM.validarUsuario("pepe", "112233");
UM.validarUsuario("marOlivares", "112233");
UM.validarUsuario("marOlivares", "11");
