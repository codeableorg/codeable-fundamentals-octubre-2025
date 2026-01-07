const users = [
  {
    email: "pepe@mail.com",
    password: "supersecret",
    name: "Pepe",
    githubUsername: "pepe-20",
  },
  {
    email: "ana@mail.com",
    password: "letmein",
    name: "Ana",
    githubUsername: "anita-dev",
  },
];

function getUser(email, password) {
  const user = users.find((user) => user.email === email); // validar correo
  // cuando user guarda undefined
  // if user es undefined, entonces lanzamos el error
  if (user === undefined || user.password !== password) {
    throw new Error("Credenciales invalidas");
  }

  return user;
}

const user = getUser("ana@mail.com", "letmein");
console.log("¡Bienvenid@ " + user.name + "!"); // ¡Bienvenid@ Ana!
const user5 = getUser("pepe@mail.com", "supersecret");
console.log("¡Bienvenid@ " + user5.name + "!"); // ¡Bienvenid@ Pepe!
// const user2 = getUser("pepe@mail.com", "123456");
// console.log("¡Bienvenid@ " + user2.name + "!"); // Credenciales invalidas
// const user3 = getUser("andre@mail.com", "supersecret");
// console.log("¡Bienvenid@ " + user3.name + "!"); // Credenciales invalidas
// const user4 = getUser("luis@mail.com", "asdfgh");
// console.log("¡Bienvenid@ " + user4.name + "!"); // Credenciales invalidas
