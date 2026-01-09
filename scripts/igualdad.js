// const ab = true;
// const aB = true;
// console.log(Object.is(ab, aB)); // true o false?
// console.log(Object.is(20, 20)); // true o false?
// console.log(Object.is("Hola", "Hola")); // true o false?
// console.log(Object.is(true, true)); // true o false?
// console.log(Object.is(null, null)); // true o false?
// console.log(Object.is(undefined, undefined)); // true o false?
// console.log(
//   Object.is(
//     function () {
//       return 1;
//     },
//     function () {
//       return 1;
//     }
//   )
// ); // true o false?

const persona1 = { nombre: "Luis" };
const persona2 = persona1;

console.log(Object.is(persona1, persona2)); // true
console.log(Object.is({ nombre: "Miguel" }, { nombre: "Miguel" })); // false
