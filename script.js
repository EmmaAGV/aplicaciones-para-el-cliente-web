document.addEventListener("DOMContentLoaded", () => {

const form = document.getElementById("formEstudiante");
const tabla = document.getElementById("tablaEstudiantes");

form.addEventListener("submit", (e) => {
e.preventDefault();

const estudiante = {
cedula: document.getElementById("cedula").value,
apellidos: document.getElementById("apellidos").value,
nombres: document.getElementById("nombres").value,
direccion: document.getElementById("direccion").value,
telefono: document.getElementById("telefono").value,
correo: document.getElementById("correo").value,
facultad: document.getElementById("facultad").value,
nivel: document.getElementById("nivel").value,
paralelo: document.getElementById("paralelo").value
};

let lista = JSON.parse(localStorage.getItem("estudiantes")) || [];

lista.push(estudiante);

localStorage.setItem("estudiantes", JSON.stringify(lista));

form.reset();

mostrar();
});

function mostrar(){

let lista = JSON.parse(localStorage.getItem("estudiantes")) || [];

tabla.innerHTML = "";

lista.forEach((e,i)=>{

tabla.innerHTML += `
<tr>
<td>${e.cedula}</td>
<td>${e.apellidos}</td>
<td>${e.nombres}</td>
<td>${e.telefono}</td>
<td>${e.correo}</td>
<td>${e.facultad}</td>
<td>${e.nivel}</td>
<td>${e.paralelo}</td>
<td>
<button class="btnEliminar" onclick="eliminar(${i})">X</button>
</td>
</tr>
`;
});

}

window.eliminar = function(i){

let lista = JSON.parse(localStorage.getItem("estudiantes")) || [];

lista.splice(i,1);

localStorage.setItem("estudiantes", JSON.stringify(lista));

mostrar();
}

mostrar();

});