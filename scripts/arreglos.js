const frutas = ["Manzana", "Platano", "Naranja", "Mango", "Fresa"];
const colores = ["Rojo", "Verde", "Azul"];
const numeros = [1, 2, 3, 4, 5, 6, 7];
const booleans = [true, false, true, false, false];
const letras = ["a", "b", "c", "d"];
const estudiantes = [
  { nombre: "Antony", apellido: "Molina", pais: "Perú" },
  { nombre: "José Luis", apellido: "Rodriguez", pais: "Perú" },
  { nombre: "Miguel Angel", apellido: "Neciosup", pais: "Perú" },
  { nombre: "Rhony", apellido: "Elguera", pais: "Perú" },
  { nombre: "Selena", apellido: "Cuyubamba", pais: "Perú" },
];

// string
// number
// boolean
// null
// undefined
// bigInt
// symbol
// object
// function

// arreglos: tipo object

//["Manzana", "Platano", "Naranja", "Mango", "Fresa"]
// find: buscar cual es el primer elemento que cumpla cierta condicion
const valor = frutas.find((fruta) => fruta === "Mango");
const frutaConP = frutas.find((fruta) => fruta[0] === "P");

// console.log(valor);
// console.log(frutaConP);

// every: evaluar si que todos los elementos cumplen cierta condicion
const evaluacion = frutas.every((fruta) => typeof fruta === "string");
// console.log(evaluacion);

// filter: el valor de retorno es un nuevo arreglo
const frutasConM = frutas.filter((fruta) => fruta[0] === "M");
// console.log(frutasConM);

// Otros: join
