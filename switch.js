function diaDeLaSemana(numero) {
  if (numero === 1) {
    return "Lunes";
  } else if (numero === 2) {
    return "Martes";
  } else if (numero === 3) {
    return "Miércoles";
  } else if (numero === 4) {
    return "Jueves";
  } else if (numero === 5) {
    return "Viernes";
  } else if (numero === 6) {
    return "Sábado";
  } else if (numero === 7) {
    return "Domingo";
  } else {
    return "Número inválido";
  }
}

// const dia = diaDeLaSemana(4);
// console.log(`Hoy es ${dia}`);

// let numero = 5;

// switch (numero) {
//   case 1:
//     console.log("Lunes");
//     break;
//   case 2:
//     console.log("Martes");
//     break;
//   case 3:
//     console.log("Miércoles");
//     break;
//   case 4:
//     console.log("Jueves");
//     break;
//   case 5:
//     console.log("Viernes");
//     break;
//   case 6:
//     console.log("Sábado");
//     break;
//   case 7:
//     console.log("Domingo");
//     break;
//   default:
//     console.log("Número inválido");
// }

let dia = "lunes";

switch (dia) {
  case "lunes":
  case "martes":
  case "miércoles":
  case "jueves":
    console.log("Un día laborable.");
    break;
  case "viernes":
    console.log("¡Casi fin de semana!");
    break;
  case "sábado":
  case "domingo":
    console.log("Día de descanso.");
    break;
}

// if (
//   dia === "lunes" ||
//   dia === "martes" ||
//   dia === "miércoles" ||
//   dia === "jueves"
// ) {
//   console.log("Un día laborable.");
// }
