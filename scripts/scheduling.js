// setTimeout(callback, [retraso], [...args])
// function saludar(nombre = "mundo") {
//   console.log("Hola " + nombre);
// }

// setTimeout(saludar, 3000, "André");
// const timerId = setTimeout(() => saludar("André"), 3000);
// clearTimeout(timerId);

// let id = setInterval(callback, [retraso], [...args]);

// let contador = 0;

// const intervalId = setInterval(() => console.log(contador++), 2000);
// setTimeout(() => clearTimeout(intervalId), 10000);

console.log("Antes de la planificación");

setTimeout(() => console.log("Tarea programada"), 0);

console.log("Después de la planificación");

console.log("Mucho después de la planificación");
