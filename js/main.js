// Almacena y recupera el registro de mascotas desde localStorage
let registroDeMascotas = JSON.parse(localStorage.getItem("registroDeMascotas")) || [];

// Función para guardar los datos en localStorage
function guardarEnLocalStorage() {
    localStorage.setItem("registroDeMascotas", JSON.stringify(registroDeMascotas));
}

// 🕒 Función para registrar una nueva mascota
function registrarMascotaConRetraso(callback) {
    console.log("🔄 Validando el registro de la mascota...");

    setTimeout(() => {
        let nombre = prompt("Ingrese el nombre de su mascota");
        let edad = prompt("Ingrese la edad de su mascota");
        let especie = prompt("Ingrese de qué especie es su mascota");
        let peso = prompt("Ingrese cuánto pesa su mascota");
        let estadoDeSalud = prompt("Ingrese en qué estado de salud se encuentra su mascota: (Sano, Enfermo, En tratamiento)");

        if (!nombre || !edad || !especie || !peso || !estadoDeSalud) {
            console.log("❌ Todos los campos son obligatorios.");
            return;
        }

        let mascota = { nombre, edad, especie, peso, estadoDeSalud };
        registroDeMascotas.push(mascota);
        guardarEnLocalStorage();

        console.log("✅ Mascota registrada con éxito.");
        callback(); // 
    }, 2000); 
}

// 🕒 Función para buscar una mascota
function buscarMascotaConRetraso() {
    let nombreBuscado = prompt("Ingrese el nombre de la mascota que desea buscar").toLowerCase();
    console.log("🔍 Buscando en la base de datos...");

    setTimeout(() => {
        let mascotaEncontrada = registroDeMascotas.find(mascota => mascota.nombre.toLowerCase() === nombreBuscado);

        if (mascotaEncontrada) {
            console.log("✅ Mascota encontrada:");
            console.log(`🐾 Nombre: ${mascotaEncontrada.nombre}`);
            console.log(`📅 Edad: ${mascotaEncontrada.edad}`);
            console.log(`🐶 Especie: ${mascotaEncontrada.especie}`);
            console.log(`⚖️ Peso: ${mascotaEncontrada.peso}`);
            console.log(`❤️ Estado de Salud: ${mascotaEncontrada.estadoDeSalud}`);
        } else {
            console.log(`❌ No se encontró ninguna mascota con el nombre "${nombreBuscado}".`);
        }
    }, 1500); 
}

// 🕒 Función para actualizar el estado de salud con espera 
function actualizarEstadoDeSaludConRetraso() {
    let nombreMascota = prompt("Ingrese el nombre de la mascota que desea actualizar").toLowerCase();
    let mascotaEncontrada = registroDeMascotas.find(mascota => mascota.nombre.toLowerCase() === nombreMascota);

    if (mascotaEncontrada) {
        console.log("🩺 Consultando al veterinario...");
        setTimeout(() => {
            let nuevoEstado = prompt("Ingrese el nuevo estado de salud de la mascota: (Sano, Enfermo, En tratamiento)");
            mascotaEncontrada.estadoDeSalud = nuevoEstado;
            guardarEnLocalStorage();

            console.log("✅ Estado de salud actualizado con éxito.");
        }, 3000); 
    } else {
        console.log(`❌ No se encontró ninguna mascota con el nombre "${nombreMascota}".`);
    }
}

// Función para listar todas las mascotas registradas
function listarMascotas() {
    if (registroDeMascotas.length === 0) {
        console.log("⚠️ No hay mascotas registradas.");
        return;
    }

    console.log("📜 Listado de Mascotas Registradas:");
    registroDeMascotas.forEach((mascota, index) => {
        console.log(`${index + 1}. Nombre: ${mascota.nombre}, Edad: ${mascota.edad}, Especie: ${mascota.especie}, Peso: ${mascota.peso}, Estado de Salud: ${mascota.estadoDeSalud}`);
    });
}

// Función para eliminar una mascota por nombre
function eliminarMascota() {
    let nombreMascota = prompt("Ingrese el nombre de la mascota que desea eliminar").toLowerCase();
    let indice = registroDeMascotas.findIndex(mascota => mascota.nombre.toLowerCase() === nombreMascota);

    if (indice !== -1) {
        registroDeMascotas.splice(indice, 1);
        guardarEnLocalStorage();
        console.log(`✅ La mascota "${nombreMascota}" ha sido eliminada.`);
    } else {
        console.log(`❌ No se encontró ninguna mascota con el nombre "${nombreMascota}".`);
    }
}

// Función para salir del programa
function salir() {
    console.log("👋 ¡Gracias por usar el sistema de registro de mascotas!");
}

// Menú de opciones
function menu() {
    let opcion;
    do {
        opcion = prompt(`Seleccione una opción:
        1. Registrar una nueva mascota
        2. Listar todas las mascotas registradas
        3. Buscar una mascota por nombre
        4. Actualizar el estado de salud de una mascota
        5. Eliminar una mascota por nombre
        6. Salir`).trim();

        switch (opcion) {
            case "1":
                registrarMascotaConRetraso(menu);
                return; // Evita que el menú se muestre antes de completar el registro
            case "2":
                listarMascotas();
                break;
            case "3":
                buscarMascotaConRetraso();
                break;
            case "4":
                actualizarEstadoDeSaludConRetraso();
                break;
            case "5":
                eliminarMascota();
                break;
            case "6":
                salir();
                return;
            default:
                console.log("❌ Opción no válida. Intente de nuevo.");
        }
    } while (opcion !== "6");
}

// Iniciar el programa
menu();
