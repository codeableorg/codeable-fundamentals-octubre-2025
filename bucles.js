// console.log("Inicio del programa");

// for (let n = 1; n <= 10; n++) {
//   console.log(n); // se debe ejecutar 10 veces!
// }

// console.log("Fin del programa");

/*
Se imprime el mensaje "Inicio del programa"
Inicia la ejecución del bucle for
Se ejecuta la inicializacion: se crea la variable numero y se le asigna 1 como valor inicial
[C] Se evalua la condicion: 1 <= 3 da como resultado true
[B] Se ejecuta el bloque de codigo: se imprime el numero 1
[P] Se ejecuta el paso: la variable numero aumenta a 2
[C] Se evalua la condicion: 2 <= 3 da como resultado true
[B] Se ejecuta el bloque de codigo: se imprime el numero 2
[P] Se ejecuta el paso: la variable numero aumenta a 3
[C] Se evalua la condicion: 3 <= 3 da como resultado true
[B] Se ejecuta el bloque de codigo: se imprime el numero 3
[P] Se ejecuta el paso: la variable numero aumenta a 4
[C] Se evalua la condicion: 4 <= 3 da como resultado false
Termina la ejecución del bucle for
Se imprime el mensaje "Fin del programa"
*/

// let i = 8;

// mientras i sea menor a 5, ejecuta el bloque de codigo
// while (i < 5) {
//   console.log(i);
//   i++;
// }

// let i = 8;

// do {
//   console.log(i);
//   i++;
// } while (i < 5);

// let texto = "Codeable es una escuela de programacion online";
// let letraObjetivo = "e";

// mientras el tipo de dato de texto[i] sea igual a "string"
// for (let i = 0; typeof texto[i] === "string"; i++) {
//   if (letraObjetivo === texto[i]) {
//     console.log(`¡Letra encontrada en la posición ${i}!`);
//     break;
//   }
// }

// mientras i sea menor o igual a 10
// for (let i = 1; i <= 10; i++) {
//   // evaluar si es que i es 4 o es 7
//   if (i === 4 || i === 7) {
//     continue;
//   }

//   console.log(i);
// }

// for-of
const texto = "Hola Mundo!";

for (const letra of texto) {
  console.log(letra);
}

const numeros = [10, 20, 30, 40, 50];

for (const numero of numeros) {
  console.log(numero);
}

// const usuario = { nombre: "Juan", correo: "juan@mail.com" };

// for (const valor of usuario) {
//   console.log(valor);
// }

// for-in

const persona = {
  nombre: "Angélica",
  edad: 30,
  profesion: "Desarrolladora",
  estudiar() {
    console.log(`${this.nombre} está estudiando.`);
  },
};

for (const propiedad in persona) {
  // console.log(propiedad); // String
  // console.log(persona[propiedad]); // Valores del objeto
  console.log(`Propiedad: ${propiedad}; Valor: ${persona[propiedad]}`);
}
