/*
Estados de las promesas:
 - Pendiente <pending> (estado inicial)
 - Cumplida <fullfilled> (estado final)
 - Rechazada <rejected> (estado final)
*/

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

const githubPublicRepos = [
  { id: 1, owner: "pepe-20", name: "hello-world" },
  { id: 2, owner: "pepe-20", name: "say-hi" },
  { id: 3, owner: "anita-dev", name: "first-repo" },
  { id: 4, owner: "anita-dev", name: "codeable" },
  { id: 5, owner: "anita-dev", name: "example" },
];

// función asincrona
function getUser(email, password) {
  // retornamos una promesa...
  return new Promise((resolve, reject) => {
    // que después de 2 segundos...
    setTimeout(() => {
      const user = users.find((u) => u.email === email);
      if (!user || user.password !== password) {
        const error = new Error("Credenciales invalidas");
        // se rechaza si las credenciales son invalidas
        reject(error);
      }

      // se cumple pasando la información del usuario
      resolve(user);
    }, 2000);
  });
}

function getPublicRepos(username) {
  const promesa = new Promise(function (resolve, reject) {
    setTimeout(() => {
      const hasConnectionError = Math.random() > 0.9;
      if (hasConnectionError) {
        const error = new Error("Error de conexión");
        reject(error);
      }

      const repos = githubPublicRepos.filter((repo) => repo.owner === username);

      resolve(repos);
    }, 2000);
  });

  return promesa;
}

// Consumir una promesas
const userPromise = getUser("pepe@mail.com", "supersecret");
// userPromise guarda un objeto Promise
userPromise
  .then((user) => {
    console.log("¡Bienvenid@ " + user.name + "!");

    return getPublicRepos(user.githubUsername);
  })
  .then((repos) => repos.forEach((repo) => console.log(repo.name)))
  .catch((error) => console.log(error.message));

// const reposPromise = getPublicRepos(user.githubUsername);

// reposPromise
//   .then((repos) => repos.forEach((repo) => console.log(repo.name)))
//   .catch((error) => console.log(error.message));

/*
function ejemplo(username) {
  const promesa = new Promise(function (cumplir, rechazar) {
    const seCumple = Math.random() > 0.5; // 50% false 50% true
    if (seCumple) {
      cumplir("La promesa se cumplio! :D");
    } else {
      rechazar("La promesa se rechazó ):");
    }
  });

  return promesa;
}

const objetoPromesa = ejemplo("pepe-20");
objetoPromesa
  .then((data) => console.log(data))
  .catch((data) => console.log(data));
*/
