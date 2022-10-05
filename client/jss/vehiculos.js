let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let vehiculos = [];



async function agregar() {
    console.log("click")
    let marca = (document.querySelector('#marca').value);
    let modelo = document.querySelector('#modelo').value;
    let patente = document.querySelector('#patente').value;
    let anio = document.querySelector('#año').value;
    let precio = document.querySelector('#precio').value;
    let capacidadDeCarga = document.querySelector("#capacidadDeCarga").value;
    let renglon = {
        "marca": marca,
        "modelo": modelo,
        "patente": patente,
        "año": anio,
        "precio": precio,
        "capacidadDeCarga": capacidadDeCarga
    }

    let respuesta = await fetch("/vehiculos", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(renglon)
    });

    if (respuesta.ok) {
        vehiculos.push(renglon);
        load();
    } else {
        console.log('Hubo un error');
    }

}

function mostrarVehiculos() {
    let html = "";
    for (let i = 0; i < vehiculos.length; i++) {
       if(vehiculos[i].capacidadDeCarga == undefined) {
        vehiculos[i].capacidadDeCarga = "-"
       }
        html += `
        <tr>
        <td>${vehiculos[i].marca}</td>
        <td>${vehiculos[i].modelo}</td>
        <td>${vehiculos[i].patente}</td>
        <td>${vehiculos[i].anio}</td>
        <td>${vehiculos[i].precio}</td>
        <td>${vehiculos[i].capacidadDeCarga}</td>
        </tr>
        `;
    }
    document.querySelector("#tblVehiculos").innerHTML = html;
}

async function load() {
    vehiculos = [];
    let respuesta = await fetch('/vehiculos')
    if (respuesta.ok) {
        let t = await respuesta.json();
        vehiculos = t;
    }
    mostrarVehiculos();
}

load();