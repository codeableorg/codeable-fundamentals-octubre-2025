// try {
//   console.log("Antes del saludo");

//   console.log(saludo);

//   console.log("Después del saludo");
// } catch (error) {
//   console.log(`Se detectó un error de tipo: ${error.name}`);
//   // console.log(error.name);
//   // console.log(error.message);
//   console.log(error.stack);
// }

// console.log("Fin del programa.");

// Error: Uncaught ReferenceError: saludo is not defined

// console.log("Antes del saludo");

// funcion asincrono
// setTimeout(() => {
// try {
// codigo sincrono
//     console.log(saludo); // <-- lanzará un error
//   } catch (error) {
//     console.log("Se detectó un error");
//   }
// }, 1000);

// console.log("Después del saludo");

function saludar(nombre) {
  // validar si es que nombre contiene un String
  if (typeof nombre === "string") {
    console.log("Hola " + nombre);
  } else {
    // lanzar un error!
    throw new TypeError("Valor de nombre incorrecto!");
    console.log("Despues del error!");
  }
}

try {
  saludar();
} catch (e) {
  console.log(e.stack);
  console.log(e.name);
  console.log(e.message);
}

console.log("Fin del programa.");

// const leon = new Animal("Leo");
