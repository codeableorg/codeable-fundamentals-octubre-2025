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
  {
    email: "codeable@mail.com",
    password: "letmein",
    name: "Codeable",
    githubUsername: "codeableorg",
  },
];

const githubPublicRepos = [
  { id: 1, owner: "pepe-20", name: "hello-world" },
  { id: 2, owner: "pepe-20", name: "say-hi" },
  { id: 3, owner: "anita-dev", name: "first-repo" },
  { id: 4, owner: "anita-dev", name: "codeable" },
  { id: 5, owner: "anita-dev", name: "example" },
  { id: 6, owner: "codeableorg", name: "codeable-fundamentals-octubre-2025" },
];

function getUser(email, password, callback) {
  setTimeout(() => {
    const user = users.find((user) => user.email === email);
    if (user === undefined || user.password !== password) {
      // escenario malo
      const error = new Error("Credenciales invalidas");
      callback(error);
      return;
    }

    callback(null, user); // escenario bueno
  }, 2000);
}

function getPublicRepos(username, callback) {
  setTimeout(() => {
    // Simulamos un posible error de conexión con Github
    const hasConnectionError = Math.random() > 0.9; // 90% false 10% true
    if (hasConnectionError) {
      const error = new Error("Error de conexión");
      callback(error);
      return;
    }

    const repos = githubPublicRepos.filter((repo) => repo.owner === username);

    callback(null, repos);
  }, 2000);
}

const email = prompt("Email:");
const password = prompt("Password:");

// funciones asincronas
getUser(email, password, function (error, user) {
  if (error) {
    console.log(error.message);
    return;
  }

  console.log("¡Bienvenid@ " + user.name + "!");

  getPublicRepos(user.githubUsername, function (error, repos) {
    if (error) {
      console.log(error.message);
      return;
    }

    console.log("- Lista de proyectos:");
    repos.forEach((repo) => console.log(repo.name));
  });
});
