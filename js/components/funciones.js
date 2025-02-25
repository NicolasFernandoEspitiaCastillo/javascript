function edad(){
    return 22;
}
// funciones expresivas
let nombre = function(miNombre){
    return miNombre;
}
// funciones por objeto
let barrio = new Function('return "Bucarica"');

// funciones flecha 
// let apellido = (miapellido)=>{ return miapellido}
// let apellido = miapellido=>{ return miapellido}
// let apellido =  miapellido=> "Mi Apellido "+miapellido

export let datos = {
    edad,
    nombre,
    apellido: miapellido=>"Mi Apellido "+miapellido
}

export let direccion = {
    barrio,
}