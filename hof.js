// 1. High Order Functions (HOF)
function imprimeA(a) {
  // el parametra a guarda un valor de tipo funcion
  console.log(a);
  console.log(a(8, 7));
}

// 2. High Order Functions (HOF)
function retornaFuncion() {
  const calcularArea = function (base, altura) {
    return (base * altura) / 2;
  };
  // el valor de retorno es de tipo funcion
  return calcularArea;
}

// const generarArea = retornaFuncion();

// console.log(generarArea(40, 20));

// let sumar = function (n1, n2) {
//   return n1 + n2;
// };

// imprimeA(sumar);

// imprimeA(function (m, n) {
//   return m * n;
// });

// const hermanoMayorCocina = function (orden) {
//   orden();
// };

function hermanoMayorCocina(orden) {
  orden();
}

const mamaCocina = function () {
  console.log("Se esta preparando el almuerzo...");
};

// hermanoMayorCocina(mamaCocina);

// mamaCocina();

function crearMultiplicador(multiplicador) {
  return function (numero) {
    console.log(numero * multiplicador);
  };
}

let multiplicaPor3 = crearMultiplicador(3);

multiplicaPor3(10);
multiplicaPor3(100);
multiplicaPor3(3);

let multiplicaPor5 = crearMultiplicador(5);

multiplicaPor5(5);
multiplicaPor5(100);
