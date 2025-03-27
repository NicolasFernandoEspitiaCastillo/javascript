let registroDeMascotas = JSON.parse(localStorage.getItem("registroDeMascotas")) || [];

// Función para registrar una nueva mascota
function registrarMascota() {
    let nombre = prompt("Ingrese el nombre de su mascota");
    let edad = prompt("Ingrese la edad de su mascota");
    let especie = prompt("Ingrese de qué especie es su mascota");
    let peso = prompt("Ingrese cuánto pesa su mascota");
    let estadoDeSalud = prompt("Ingrese en qué estado de salud se encuentra su mascota: (Sano, Enfermo, En tratamiento)");

    // Crear un objeto de la mascota
    let mascota = {
        nombre: nombre,
        edad: edad,
        especie: especie,
        peso: peso,
        estadoDeSalud: estadoDeSalud,
    };

    // Agregar la mascota al registro
    registroDeMascotas.push(mascota);

    // Guardar el registro actualizado en localStorage
    localStorage.setItem("registroDeMascotas", JSON.stringify(registroDeMascotas));

    console.log("Mascota Registrada");
}
registrarMascota()
// Función para listar todas las mascotas registradas
function listarMascotas() {
    if (registroDeMascotas.length === 0) {
        console.log("No hay mascotas registradas.");
        return;
    }

    console.log("Listado de Mascotas Registradas:");
    registroDeMascotas.forEach(mascota => {
        console.log(Nombre: ${mascota.nombre}, Edad: ${mascota.edad}, Especie: ${mascota.especie}, Peso: ${mascota.peso}, Estado de Salud: ${mascota.estadoDeSalud});
    });
}

// Función para buscar una mascota por nombre
function buscarMascota() {
    let nombreBuscado = prompt("Ingrese el nombre de la mascota que desea buscar");

    let mascotaEncontrada = registroDeMascotas.find(mascota => mascota.nombre.toLowerCase() === nombreBuscado.toLowerCase());

    if (mascotaEncontrada) {
        console.log("Mascota encontrada:");
        console.log(Nombre: ${mascotaEncontrada.nombre});
        console.log(Edad: ${mascotaEncontrada.edad});
        console.log(Especie: ${mascotaEncontrada.especie});
        console.log(Peso: ${mascotaEncontrada.peso});
        console.log(Estado de Salud: ${mascotaEncontrada.estadoDeSalud});
    } else {
        console.log("No se encontró ninguna mascota con el nombre: " + nombreBuscado);
    }
}

// Función para actualizar el estado de salud de una mascota
function actualizarEstadoDeSalud() {
    let nombreMascota = prompt("Ingrese el nombre de la mascota que desea actualizar el estado de salud");
    let mascotaEncontrada = registroDeMascotas.find(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

    if (mascotaEncontrada) {
        let nuevoEstado = prompt("Ingrese el nuevo estado de salud de la mascota: (Sano, Enfermo, En tratamiento)");
        mascotaEncontrada.estadoDeSalud = nuevoEstado;

        // Actualizar el registro en localStorage
        localStorage.setItem("registroDeMascotas", JSON.stringify(registroDeMascotas));

        console.log("Estado de salud actualizado:");
        console.log(Nombre: ${mascotaEncontrada.nombre});
        console.log(Nuevo Estado de Salud: ${mascotaEncontrada.estadoDeSalud});
    } else {
        console.log("No se encontró ninguna mascota con el nombre: " + nombreMascota);
    }
}

// Función para eliminar una mascota por nombre
function eliminarMascota() {
    let nombreMascota = prompt("Ingrese el nombre de la mascota que desea eliminar");
    let indice = registroDeMascotas.findIndex(mascota => mascota.nombre.toLowerCase() === nombreMascota.toLowerCase());

    if (indice !== -1) {
        registroDeMascotas.splice(indice, 1);

        // Actualizar el registro en localStorage
        localStorage.setItem("registroDeMascotas", JSON.stringify(registroDeMascotas));

        console.log("Mascota eliminada:");
        console.log(Nombre: ${nombreMascota});
    } else {
        console.log("No se encontró ninguna mascota con el nombre: " + nombreMascota);
    }
}

// Función para salir del programa
function salir() {
    console.log("¡Gracias por usar el sistema de registro de mascotas!");
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
        6. Salir`);

        switch (opcion) {
            case "1":
                registrarMascota();
                break;
            case "2":
                listarMascotas();
                break;
            case "3":
                buscarMascota();
                break;
            case "4":
                actualizarEstadoDeSalud();
                break;
            case "5":
                eliminarMascota();
                break;
            case "6":
                salir();
                break;
            default:
                console.log("Opción no válida. Intente de nuevo.");
        }
    } while (opcion !== "6");
}

// Llamar al menú para iniciar el programa
menu();



