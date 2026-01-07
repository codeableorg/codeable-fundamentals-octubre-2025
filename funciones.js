// const schoolName = "Codeable";

// Declaración de función
// function sumar() {
//   const num1 = 30;
//   const num2 = 40;
//   const suma = num1 + num2;
//   console.log(`El resultado es ${suma}`);
// }

// Expresión de función
// let restar = function () {
//   const num1 = 100;
//   const num2 = 25;
//   const resta = num1 - num2;
//   console.log(`La resta da como resultado ${resta}`);
// };

function mostrarMensaje() {
  let mensaje = "Soy una variable local";
  console.log(mensaje);
}

// sumar();
// mostrarMensaje();
// console.log(mensaje);

// Llamar o ejecutar la funcion sumar
// restar();
// restar = "Hola Mundo!";
// console.log(restar);

// sumar();
// sumar = false;
// console.log(sumar);

// let nombre = "Sebastian";

// function saludarJuan() {
//   let nombre = "Juan";
//   console.log("Hola" + " " + nombre);
// }

// saludarJuan();
// console.log(nombre);

// sumar(15, 25);
// sumar(2, 7);
// sumar(100, 1);

function saludar(nombre) {
  console.log("¡Hola, " + nombre + "!");
}

// saludar("Cristina");
// saludar("Yesenia");
// const usuario = "André";
// saludar(usuario);

function crearUsuario(nombre, edad) {
  console.log(nombre, edad);
}

// crearUsuario("Andre", 32);
// crearUsuario("Luis", 28);
// crearUsuario("Maria", 29);
// crearUsuario("José");
// crearUsuario();
// crearUsuario("Antony", 25, true, "98767654", "Peru");

// function sumar(numero1 = 0, numero2 = 0) {
//   const suma = numero1 + numero2;
//   console.log(`El resultado es ${suma}`);
// }

// sumar(99, 1);
// sumar(50);
// sumar();
// sumar(true, false);
// sumar("Hola", "Mundo");

// function sumar(a, b, c = 0) {
//   return a + b + c;
// }

// console.log(sumar(10, 8, 2));
// console.log(sumar(10, 8));

// function restar(a, b) {
//   return a - b;
// }

// function saludar() {
//   console.log("Hola mundo!");
// }

function saludar(apellido) {
  console.log(`¡Hola! Mi nombre es ${this.nombre} ${apellido}.`);
}

const persona = {
  nombre: "Luis",
  presentarse: saludar,
};

const nuevoSaludar = saludar.bind(persona);
// nuevoSaludar("Miguel");

function presentar(titulo, ciudad) {
  console.log(`${titulo} ${this.nombre}, de ${ciudad}.`);
}

const argArray = ["Sra.", "Watson"];

// presentar.call(persona, "Sr.", "Lima");
// presentar.apply(persona, argArray);

// operador rest o rest parameter
function sumarTodos(...numeros) {
  // console.log(numeros); // arreglo: conjunto de valores
  let result = 0;

  for (let i = 0; i < numeros.length; i++) {
    result += numeros[i];
  }

  return result;
}

// console.log(sumarTodos(10, 20, 30, 40, 50)); // 150
// console.log(sumarTodos(10, 20, 30, 40, 50, 60));
// console.log(sumarTodos(10, 20, 30, 40, 50, 60, 70));

// operador spread
// Arreglos
const numerosPares = [2, 4, 6, 8, 10];
const numerosImpares = [1, 3, 5, 7, 9];
// const numerosParesHasta20 = [...numerosPares, 12, 14, 16, 18, 20];

let suma = (a, b) => a + b;

const nums = [20, 30];

// console.log(suma(...nums));

// Objetos
const datos2 = { nombre: "Juan", apellido: "Perez" };
const persona2 = { ...datos2, pais: "Mexico", ciudad: "Guadalajara" };
