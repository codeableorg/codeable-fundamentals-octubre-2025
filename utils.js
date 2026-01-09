// importaciones (imports)

// código interno y exportaciones (exports)
function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function sumar(a, b) {
  return a + b;
}

export { randomBetween, sumar };
