#!/usr/bin/env node

const datos = [];


// Carga listado de vehiculos a procesar
const cargarDatos = () => {
    datos.push({
        Marca: "Peugeot",
        Modelo: "206",
        Puertas: 4,
        Precio: 200000.00
    });
    datos.push({
        Marca: "Honda",
        Modelo: "Titan",
        Cilindrada: "125c",
        Precio: 60000.00
    });
    datos.push({
        Marca: "Peugeot",
        Modelo: "208",
        Puertas: 5,
        Precio: 250000.00
    });
    datos.push({
        Marca: "Yamaha",
        Modelo: "YBR",
        Cilindrada: "160c",
        Precio: 80000.50
    });
};

// Imprime listado total de vehiculos con toda su informacion
imprimirListado = () => {
    datos.forEach(vehiculo => {
        let salida = "";
        for (const key in vehiculo) {
            formato = `${key}: `;
            if (key !== "Precio") {
                formato += `${vehiculo[key]} // `;
            } else {
                // Si el campo es el precio, modifica a un estilo de moneda
                formato += `${vehiculo[key].toLocaleString('en-EN', {style: "currency", currency: "USD", minimumFractionDigits: 2})}`;
            }
            salida += formato;
        }
        console.log(salida);
    });
};

imprimirEstadisticas = () => {
    // Crea copia del listado de vehiculos para modificar
    const copia = [...datos];
    // Ordena la lista copiada de mayor a menor precio
    copia.sort((a,b) => b.Precio - a.Precio);
    const encontrado = copia.find(vehiculo => vehiculo.Modelo.includes("Y"));
    // Extrae el primero y ultimo valor de la lista ordenada (vehiculo más/menos caro)
    const caro = copia.shift();
    const barato = copia.pop();
    console.log(`Vehículo más caro: ${caro.Marca} ${caro.Modelo}`);
    console.log(`Vehículo más barato: ${barato.Marca} ${barato.Modelo}`);
    console.log(`Vehículo que contiene en el modelo la letra ‘Y’: ${encontrado.Marca} ${encontrado.Modelo} ${encontrado.Precio.toLocaleString('en-EN', {style: "currency", currency: "USD", minimumFractionDigits: 2})}`);
};

imprimirOrdenados = () => {
    // Crea copia del listado de vehiculos para modificar
    const copia = [...datos];
    // Ordena la lista copiada de mayor a menor precio
    copia.sort((a,b) => b.Precio - a.Precio);
    console.log("Vehículos ordenados por precio de mayor a menor:");
    copia.forEach(vehiculo => {
        console.log(`${vehiculo.Marca} ${vehiculo.Modelo}`);
    });
};

cargarDatos();
imprimirListado();
console.log("=============================");
imprimirEstadisticas();
console.log("=============================");
imprimirOrdenados();