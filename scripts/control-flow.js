// Declaración if

// if (condición) {
// Bloque de código que se ejecuta si la condición es "truthy"
// }

// Boolean: true o false

// if ("tengo hambre?") {
//   "busco algo para comer"
// }

// let llueve = false;

// console.log("Preparame algun refrigerio para llevar");
// console.log("Me alisto para salir");
// if (llueve) {
//   console.log("¡Lleva un paraguas!");
// } else {
//   console.log("No necesitas llevar un paraguas hoy.");
// }
// console.log("Voy hasta el paradero y tomo un bus");
// console.log("Llego a mi destino...");

// if (condición) {
// Bloque de código que se ejecuta si la condición es "truthy"
// } else {
// Bloque de codigo se ejecuta solo cuando la condicion es "falsy"
// }

// let temperatura = 20;

// if (temperatura >= 30) {
//   console.log("Hace mucho calor. Es mejor no salir y manerte hidratado!");
// } else if (temperatura < 30 && temperatura >= 21) {
//   console.log("Un día caluroso como para disfrutar de la playa!");
// } else if (temperatura < 21 && temperatura >= 11) {
//   console.log(
//     "Está haciendo frío afuera. Si piensas salir, ve con algun abrigo"
//   );
// } else {
//   console.log("Hace demasiado frío. Mejor no salir y alimentarse bien!");
// }

// if ("Code" + "able" === "codeable") {
//   console.log("Cualquier expresión truthy funciona");
// }

// console.log("Fin del programa");

// OR || pipe
// AND && ampersand
// si el primer valor es "truthy" entonces ese valor es retornado
// si ello no se cumple, entonces se retorna automaticamente el segundo valor
// let condicion = undefined || "funciona";

// if (condicion) {
//   console.log("Una variable también es una expresión");
// }

// Operador Ternario

// condición ? expresiónSiTruthy : expresiónSiFalsy;

let llueve = false;
// llueve ? console.log("¡Lleva un paraguas!") : console.log("No necesitas un paraguas.");
const mensaje = llueve ? "¡Lleva un paraguas!" : "No necesitas un paraguas.";
console.log(mensaje);

if (llueve) {
  console.log("¡Lleva un paraguas!");
  console.log("¡Lleva un paraguas!");
  console.log("¡Lleva un paraguas!");
  console.log("¡Lleva un paraguas!");
} else {
  console.log("No necesitas un paraguas.");
  console.log("No necesitas un paraguas.");
  console.log("No necesitas un paraguas.");
  console.log("No necesitas un paraguas.");
}
