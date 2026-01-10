var input = document.getElementById("nueva-tarea");
var buttonAgregar = document.getElementById("agregar");
var buttonBorrar = document.getElementById("borrar");
var ul = document.getElementById("tareas");

function mostrarTareas() {
  ul.innerHTML = "";
  var tareas = obtenerTareas();

  for (const tarea of tareas) {
    var li = document.createElement("li");
    li.textContent = tarea;
    ul.append(li);
  }
}

function handleAgregar(_event) {
  var nuevaTarea = input.value;
  if (nuevaTarea === "") return;

  agregarTarea(nuevaTarea);
  input.value = "";
  mostrarTareas();
}

function handleBorrar(_event) {
  ul.innerHTML = "";
  borrarTareas();
}

buttonAgregar.onclick = handleAgregar;
buttonBorrar.onclick = handleBorrar;

mostrarTareas();
