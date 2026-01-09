// function saludar(nombre) {
//   console.log(`Hola, mi nombre es ${nombre}`);
//   console.log(this);
// }

// const persona1 = {
//   nombre: "Simon",
//   saludar: saludar,
//   imprimeThis: function () {
//     console.log(this);
//   },
// };

// const persona2 = {
//   nombre: "Micaela",
//   saludar: saludar,
//   imprimeThis: function () {
//     console.log(this);
//   },
// };

// persona1.imprimeThis();
// persona2.imprimeThis();
// saludar("André");

// persona1.saludar("Simon"); // "Hola, mi nombre es Simon"
// persona2.saludar("Micaela"); // "Hola, mi nombre es Micaela"

// let imprimeThis = f
// function imprimeThis() {
//   console.log(this);
// }

// const persona = {
//   nombre: "Simon",
//   imprimeThis: imprimeThis,
// };

// const auto = {
//   marca: "Toyota",
//   imprimeThis: imprimeThis,
// };

// persona.imprimeThis();
// auto.imprimeThis();
// imprimeThis();

// console.log(this === window);

const persona = {
  nombre: "Simon",
  apellido: "Grau",
  imprimirIniciales() {
    console.log(this.nombre[0] + this.apellido[0]);
  },
  obtenerNombreCompleto() {
    return this.nombre + " " + this.apellido;
  },
};

console.log(persona.obtenerNombreCompleto());
// console.log(`Nombre: ${persona.nombre + " " + persona.apellido}`);
