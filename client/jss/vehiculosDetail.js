let params = [];
let vehiculos = [];
let btnGuardar = document.querySelector("#btnGuardar");

function processParams() {
    let paramstr = window.location.search.substr(1);
    let paramarr = paramstr.split("&");
    for (let i = 0; i < paramarr.length; i++) {
        let tmparr = paramarr[i].split("=");
        params[tmparr[0]] = tmparr[1];
    }
}
processParams()

document.querySelector('#marca').value = params["marca"];
document.querySelector('#modelo').value = params["modelo"];
document.querySelector('#patente').value = params["patente"];
document.querySelector('#año').value = params["anio"];
document.querySelector('#precio').value = params["precio"];
document.querySelector("#capacidadDeCarga").value = params["capacidadDeCarga"];


btnGuardar.addEventListener("click",guardar)

async function guardar() {
    let marca = document.querySelector('#marca').value ;
    let modelo = document.querySelector('#modelo').value;
    let patente = document.querySelector('#patente').value;
    let anio = document.querySelector('#año').value;
    let precio = document.querySelector('#precio').value;
    let capacidadDeCarga = document.querySelector("#capacidadDeCarga").value;
    let renglon = {
        "marca": marca,
        "modelo": modelo,
        "patente": patente,
        "anio": Number(anio),
        "precio": Number(precio),
        "capacidadDeCarga": Number(capacidadDeCarga)
    }

    let respuesta = await fetch(`/vehiculos/${params["id"]}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(renglon)

        
    });
    if (respuesta.ok) {
        vehiculos.push(renglon);
        load();
        alert("Cambios guardado con exito")
    } else {
        console.log('Hubo un error');
    }
}

async function load() {
    vehiculos = [];
    let respuesta = await fetch('/vehiculos');
    if (respuesta.ok) {
        let t = await respuesta.json();
        vehiculos = t;
    }
}

load();