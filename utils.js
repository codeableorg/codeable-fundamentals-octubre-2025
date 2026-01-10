// código interno y exportaciones (exports)
export const escuela = "Codeable";

function saludar() {
  console.log("Hola");
}

export default function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function imprimir(mensaje) {
  console.log(mensaje);
}

function sumar(a, b) {
  return a + b;
}

export { saludar, imprimir, sumar };
