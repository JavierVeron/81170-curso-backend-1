const generarNumeroAleatorio = () => {
    return new Promise((resolve) => {
        resolve(Math.floor(Math.random() * 20) + 1)
    })
}

const iteraciones = 10000;
const numerosAleatorios = [];
const numeros = [];

const generarNumerosAleatorios = async () => {
    for (let i=0; i<iteraciones; i++) {
        let numero = await generarNumeroAleatorio();
        numerosAleatorios.push(numero);
    }

    for (let i=0; i<numerosAleatorios.length; i++) {
        let numero = numerosAleatorios[i];       
        let existe = numeros.some(item2 => item2.id == numero);

        if (!existe) {
            numeros.push({id:numero, apariciones:(numerosAleatorios.filter(item2 => item2 == numero)).length});
        }
    }

    console.log(numerosAleatorios);
    console.log(numeros);
}

generarNumerosAleatorios();