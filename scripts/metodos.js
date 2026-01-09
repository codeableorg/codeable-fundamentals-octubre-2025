// let restar = function (num1, num2) {
//   const resta = num1 - num2;
//   console.log(`La resta da como resultado ${resta}`);
// };

// const persona = {
//   nombre: "Luis",
//   edad: 20,
//   direccion: { calle: "Las Flores", ciudad: "Lima" },
//   saludar() {
//     console.log("Hola!");
//   },
// };

// function dormir() {
//   console.log("zZZ...");
// }

// const persona = {
//   nombre: "Luis",
//   edad: 20,
//   direccion: { calle: "Las Flores", ciudad: "Lima" },
//   saludar: function () {
//     console.log("Hola!");
//   },
//   dormitar: dormir,
// };

// function volar() {
//   console.log("vuela");
// }

// const numeroPatas = 2;

// const ave = {
// volar: volar,
//   volar,
//   numeroPatas,
// };

// const avion = {
//   volar: volar,
// };

// Ejercicio: Calculadora
// const calculadora = {
//   suma(a, b) {
//     return a + b;
//   },
//   resta(a, b) {
//     return a - b;
//   },
//   multiplica(a, b) {
//     return a * b;
//   },
//   divide(a, b) {
//     return a / b;
//   },
// };

// console.log(calculadora.suma(100, 20)); // 120
// console.log(calculadora.resta(100, 20)); // 80
// console.log(calculadora.multiplica(100, 20)); // 2000
// console.log(calculadora.divide(100, 20)); // 5

const persona = {
  nombre: "Luis",
  apellido: "Grau",
  correo: "luis@mail.com",
  edad: 20,
  direccion: { calle: "Las Flores 310", ciudad: "Lima" },
  saludar() {
    console.log("Hola!");
  },
  get nombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
  set actualizarEdad(edad) {
    this.edad = edad;
  },
  set nombreCompleto(valor) {
    if (typeof valor !== "string") return;

    const partes = valor.split(" ");
    this.nombre = partes[0];
    this.apellido = partes[1];
  },
};

// persona.edad = 21;
// persona.actualizarEdad(22);

// const email = "luis02@mail.com";

// if (email === persona.correo) {
// logica para continuar con el proceso de autenticacion
// }

// function multiplicar(a, b) {
//   return a * b;
// }

// function calcularAreaTriangulo(base, altura) {
//   const area = multiplicar(base, altura) / 2;
//   return area;
// }

// console.log(calcularAreaTriangulo(30, 10));
// console.log(multiplicar(5, 5));
