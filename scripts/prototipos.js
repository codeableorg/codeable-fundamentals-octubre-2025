// let mamifero = {
//   poneHuevos: false,
// };

// mamifero.__proto__ = null;

// let humano = {
//   corazon: true,
// };

// humano.__proto__ = mamifero;

// let mj = {
//   nacionalidad: "estadounidense",
// };

// mj.__proto__ = humano; // Setter
// mj.corazon = false;

// mj.__proto__; // Getter

// let maryJean = {
//   corazon: true,
//   [[Prototype]]: {},
//   set __proto__(valor) {
//     this[[Prototype]] = valor;
//   }
// };

// maryJean.__proto__ = humano;

// const spiderman = {};
// spiderman.__proto__.identidad = "Peter Parker";

let humano = {
  corazon: true,
};

let mj = {
  nacionalidad: "estadounidense",
};

Object.setPrototypeOf(mj, humano); // setter
console.log(Object.getPrototypeOf(mj)); // getter
