import fs from "fs"

class UserManager {
    constructor() {
        this.usuarios = [];
        this.archivo = "usuarios.json";
    }

    async obtenerId() {
        return (await this.consultarUsuarios()).length + 1;
    }

    async crearUsuario(nombre, apellido, edad, curso) {
        const nuevoUsuario = {id:await this.obtenerId(), nombre, apellido, edad, curso};         
        const usuarios = await this.consultarUsuarios();
        usuarios.push(nuevoUsuario);        
        await fs.promises.writeFile(this.archivo, JSON.stringify(usuarios));
        console.log("El Usuario se ha agregado correctamente!");
    }

    async consultarUsuarios() {
        this.usuarios = fs.existsSync(this.archivo) ? JSON.parse(await fs.promises.readFile(this.archivo, "utf-8")) : [];

        return this.usuarios;
    }
}

const operacionesConUsuarios = async () => {
    const UM = new UserManager();
    await UM.crearUsuario("Gaston", "Garcia", 24, "Curso Backend I");
    await UM.crearUsuario("Cintia", "Hardy", 23, "Curso Backend II");
    await UM.crearUsuario("Florencia", "Ramirez", 22, "Curso Backend III");
    await UM.crearUsuario("Leandro", "Cruz", 26, "Curso Backend I");
    console.log(await UM.consultarUsuarios());
}

operacionesConUsuarios();