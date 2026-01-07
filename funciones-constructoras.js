// const animal = {};

// animal.nombre = "Leo";
// animal.energia = 10;

// animal.comer = function (cantidad) {
//   console.log(`${this.nombre} está comiendo!`);
//   this.energia += cantidad;
// };

// animal.dormir = function (tiempo) {
//   console.log(`${this.nombre} está durmiendo.`);
//   this.energia += tiempo;
// };

// animal.jugar = function (tiempo) {
//   console.log(`${this.nombre} está jugando.`);
//   this.energia -= tiempo;
// };

// hemos creado 1 objeto animal

// const metodosAnimal = {
//   comer: function (cantidad) {
//     console.log(`${this.nombre} está comiendo.`);
//     this.energia += cantidad;
//   },
//   dormir: function (tiempo) {
//     console.log(`${this.nombre} está durmiendo.`);
//     this.energia += tiempo;
//   },
//   jugar: function (tiempo) {
//     console.log(`${this.nombre} está jugando.`);
//     this.energia -= tiempo;
//   },
// };

function Animal(nombre, energia) {
  let animal = Object.create(Animal.prototype);

  animal.nombre = nombre;
  animal.energia = energia;

  return animal;
}

Animal.prototype.comer = function (cantidad) {
  console.log(`${this.nombre} está comiendo.`);
  this.energia += cantidad;
};

Animal.prototype.dormir = function (tiempo) {
  console.log(`${this.nombre} está durmiendo.`);
  this.energia += tiempo;
};

Animal.prototype.jugar = function (tiempo) {
  console.log(`${this.nombre} está jugando.`);
  this.energia += tiempo;
};

// objetos o instancias
const leon = Animal("Leo", 80);
const jirafa = Animal("Lazy", 50);

function Humano(nombre) {
  this.nombre = nombre;
}

const andre = new Humano("André");
const rhony = new Humano("Rhony");
