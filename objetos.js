// let taza = {
//   nombre: "Taza",
//   color: "blanco",
//   material: "ceramica",
//   alto: 15,
//   capacidad: 300,
//   añoFabricacion: 2018,
//   marca: null,
//   productoNuevo: true,
//   estado: "Nuevo",
// };

// const mensaje = `El usuario André ha colocado en su lista de regalos el siguiente objeto: ${taza.nombre} de color ${taza.color}`;
// console.log(mensaje);

// Notacion del punto (.)
// console.log(taza.estado);
// taza.estado = "Usado";
// console.log(taza.estado);
// taza.tamaño = "Mediana";
// console.log(taza);

// Notacion de los corchetes
// console.log(taza["capacidad"]);
// taza["productoNuevo"] = false;

// Propiedades
// llave: valor,
// key: value,

let sherlock = {
  apellido: "Holmes",
  direccion: { ciudad: "Londres" },
  edad: 64,
};

let john = {
  apellido: "Watson",
  direccion: sherlock.direccion, // Londres
};

john = {
  apellido: "Lennon",
  direccion: { ciudad: "Nueva York" },
};

// console.log(sherlock.apellido);
// console.log(sherlock.direccion.ciudad);
// console.log(sherlock.direccion.ciudad); / / Londres
// console.log(john.direccion.ciudad); // Londres

// john.apellido = "Lennon";
// john.direccion.ciudad = "Nueva York";
// john.direccion = { ciudad: "Nueva York" };
// john.direccion = "Londres";

// const propiedadConsulta = prompt("¿Qué quieres saber de Sherlock?");
// console.log(sherlock.apellido);
// console.log(sherlock.direccion);
// console.log(sherlock[propiedadConsulta]);
// console.log(sherlock["apellido"]);

const shrek = { especie: "ogro" };
const fiona = { especie: "ogro" };

// shrek = 99; // Error!
shrek.especie = "humano";
shrek.comidaFavorita = "lodo";
console.log(shrek);
