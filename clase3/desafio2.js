const { log } = require('console');
const crypto = require('crypto');

class UsersManager {
    static usuarios = [];

    encriptarContrasena(pass) {
        const hash = crypto.createHash('sha256');
        hash.update(pass);

        return hash.digest('hex');
    }

    crearUsuario(usuario) {
        const nuevoUsuario = {nombre:usuario.nombre, apellido:usuario.apellido, usuario:usuario.usuario, contrasena:this.encriptarContrasena(usuario.contrasena)};
        UsersManager.usuarios.push(nuevoUsuario);
    }

    mostrarUsuarios() {
        return UsersManager.usuarios.map(item => item.usuario);
    }

    validarUsuario(usuario, contrasena) {
        contrasena = this.encriptarContrasena(contrasena);
        const existeUsuario = UsersManager.usuarios.find(item => item.usuario == usuario);

        if (existeUsuario) {
            if (existeUsuario.contrasena == contrasena) {
                console.log("Usuario logueado!");
            } else {
                console.log("La contraseña no coincide!");
            }
        } else {
            console.log("Usuario inválido!");
        }
    }
}

const UM = new UsersManager();

const usuario1 = {
    nombre:"nacho",
    apellido:"gonzalez",
    usuario:"nachog",
    contrasena:"112233"
}
const usuario2 = {
    nombre:"ricardo",
    apellido:"cabral",
    usuario:"richardc",
    contrasena:"112233"
}

UM.crearUsuario(usuario1);
UM.crearUsuario(usuario2);
console.log(UM.mostrarUsuarios());
UM.validarUsuario("messi", "112");
UM.validarUsuario("messi", "112233");
UM.validarUsuario("nachog", "112");
UM.validarUsuario("nachog", "112233"); // ok
