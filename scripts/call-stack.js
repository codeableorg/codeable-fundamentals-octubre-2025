// function saludar() {
//   console.log("Se ejecuta saludar..."); // 3ra ejecucion
// }

// console.log("Primer console.log"); // 1ra ejecucion

// saludar(); // 2da ejecucion

// console.log("Ultimo console.log"); // 4ta ejecucion

function prepararPocionMortifago() {
  console.log("Preparando la poción para los Mortífagos");
  añadirIngrediente("Lagrima de basilisco");
}

function prepararPocionAuror() {
  console.log("Preparando la poción para los Aurors");
  añadirIngrediente("Pluma de fénix");
  prepararPocionMortifago();
  añadirIngrediente("Escama de dragón");
}

function añadirIngrediente(ingrediente) {
  console.log("Añadiendo " + ingrediente);
  realizarHechizo();
}

function realizarHechizo() {
  console.log("Pronunciando hechizo para mezclar ingredientes");
}

console.log("Inicio de la preparación de pociones");
prepararPocionAuror();
console.log("Final de la preparación de pociones");
