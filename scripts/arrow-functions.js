// Function Declaration
// function suma1(a, b) {
//   return a + b;
// }

// Function Expression
// let suma2 = function (a, b) {
//   return a + b;
// };

// Arrow Function
// 0, 2 o mas parametros
// const sumar3 = (a, b) => a + b;
// 1 solo parametro
// const duplicar = (n) => n * 2;

// const imprimir = () => console.log("Hola!");

const escuela = {
  nombre: "Codeable",
  anioFundacion: 2019,
  mostrarAnioFundacion: function () {
    console.log(this.anioFundacion);
  },
  mostrarSaludo: () => console.log("Bienvenido a Codeable!"),
  mostrarNombre: function () {
    const funcionInterna = () => console.log(this.nombre);
    funcionInterna();
  },
};

// contexto circundante !== durante la ejecucion

escuela.mostrarNombre();
// console.log(this);
// escuela.mostrarAnioFundacion();
