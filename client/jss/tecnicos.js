
let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let tecnicos = [];

load()


function agregar() {
    console.log("Función Agregar");
    let nombre = document.querySelector('#nombre').value;
    let apellido = document.querySelector('#apellido').value;
    let experienciaLaboral = document.querySelector('#experienciaLaboral').value;
    let numeroDeTelefono = document.querySelector('#numeroDeTelefono').value;

    let renglon = {
        "nombre": nombre,
        "apellido": apellido,
        "experienciaLaboral": experienciaLaboral,
        "numeroDeTelefono": numeroDeTelefono,
    }
    tecnicos.push(renglon);
    mostrarTecnicos()
}


function mostrarTecnicos() {
    let html = "";
    for(let i = 0; i < tecnicos.length; i++) {
        html += `
        <tr>
        <td>${tecnicos[i].nombre}</td>
        <td>${tecnicos[i].apellido}</td>
        <td>${tecnicos[i].experienciaLaboral}</td>
        <td>${tecnicos[i].numeroDeTelefono}</td>
        </tr>
        `;
    }
    document.querySelector("#tblTecnicos").innerHTML = html;
}

async function load() {
    let respuesta = await fetch('/tecnico')
    if(respuesta.ok) {
        let t = await respuesta.json()
        tecnicos = t
    }
    mostrarTecnicos()
}