// Cliente -> Servidor
let user = {
  email: "ana@mail.com",
  password: "letmein",
};

const userJSON = JSON.stringify(user);
// console.log(typeof userJSON);
// enviar un request al servidor incluyendo userJSON

// Servidor -> Cliente
const json =
  '{"email":"ana@mail.com","password":"letmein","name":"Ana","githubUsername":"anita-dev"}';

const userObject = JSON.parse(json);

const reposJSON =
  '[{"id":3,"owner":"anita-dev","name":"first-repo"},{"id":4,"owner":"anita-dev","name":"codeable"},{"id":5,"owner":"anita-dev","name":"example"}]';

const reposObject = JSON.parse(reposJSON);

// const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");
// promise
//   .then((response) => {
//     // console.log(typeof response);
//     // console.log(response);
//     return response.json(); // retorna una nueva promesa, cuando esta se cumple ahi sucede el JSON.parse
//   })
//   .then((json) => console.log(json));
