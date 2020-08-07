#!/usr/bin/env node

// Clases
class Vehiculo {
    constructor(marca, modelo, precio) {
        this.marca = marca;
        this.modelo = modelo;
        this.precio = precio;
    }

    precio_formateado() {
        return this.precio.toLocaleString('en-EN', {style: "currency", currency: "USD", minimumFractionDigits: 2});
    }

    informacion() {
        console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Precio: ${this.precio_formateado()}`);
    }
}

class Auto extends Vehiculo {
    constructor(marca, modelo, puertas, precio) {
        super(marca, modelo, precio);

        this.puertas = puertas;
    }

    informacion() {
        console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Puertas: ${this.puertas} // Precio: ${this.precio_formateado()}`);
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, cilindrada, precio) {
        super(marca, modelo, precio);

        this.cilindrada = cilindrada;
    }

    informacion() {
        console.log(`Marca: ${this.marca} // Modelo: ${this.modelo} // Cilindrada: ${this.cilindrada} // Precio: ${this.precio_formateado()}`);
    }
}

const datos = [];


// Carga listado de vehiculos a procesar
const cargarDatos = () => {
    datos.push(new Auto("Peugeot", "206", 4, 200000.00));
    datos.push(new Moto("Yamaha", "Titan", "125c", 60000.00));
    datos.push(new Auto("Peugeot", "208", 5, 250000.00));
    datos.push(new Moto("Yamaha", "YBG", "160c", 80000.50));
};

// Imprime listado total de vehiculos con toda su informacion
imprimirListado = () => {
    datos.forEach(vehiculo => {
        vehiculo.informacion();
    });
};

imprimirEstadisticas = () => {
    // Crea copia del listado de vehiculos para modificar
    const copia = [...datos];
    // Ordena la lista copiada de mayor a menor precio
    copia.sort((a,b) => b.precio - a.precio);
    const encontrado = copia.find(vehiculo => vehiculo.modelo.includes("Y"));
    // Extrae el primero y ultimo valor de la lista ordenada (vehiculo más/menos caro)
    const caro = copia.shift();
    const barato = copia.pop();
    console.log(`Vehículo más caro: ${caro.marca} ${caro.modelo}`);
    console.log(`Vehículo más barato: ${barato.marca} ${barato.modelo}`);
    console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${encontrado.marca} ${encontrado.modelo} ${encontrado.precio_formateado()}`);
};

imprimirOrdenados = () => {
    // Crea copia del listado de vehiculos para modificar
    const copia = [...datos];
    // Ordena la lista copiada de mayor a menor precio
    copia.sort((a,b) => b.precio - a.precio);
    console.log("Vehículos ordenados por precio de mayor a menor:");
    copia.forEach(vehiculo => {
        console.log(`${vehiculo.marca} ${vehiculo.modelo}`);
    });
};

cargarDatos();
imprimirListado();
console.log("=============================");
imprimirEstadisticas();
console.log("=============================");
imprimirOrdenados();