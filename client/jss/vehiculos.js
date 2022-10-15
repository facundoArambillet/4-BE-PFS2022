
let btnAgregar = document.querySelector("#btnAgregar");
let btnBuscar = document.querySelector("#btnBuscar");
//let btnEliminar = document.querySelector("btnEliminar");
//btnEliminar.addEventListener("click", eliminar);
btnBuscar.addEventListener("click", buscar);
btnAgregar.addEventListener("click", agregar);

let vehiculos = [];

function eliminar() {

}

async function buscar() {
    let patenteBuscada = document.querySelector('#patente').value;
    let vehiculoBuscado = [];
    let respuesta = await fetch(`/vehiculos/${patenteBuscada}`);
    if (respuesta.ok) {
        let x = await respuesta.json();
        vehiculoBuscado = x;
        console.log(vehiculoBuscado)
    }

    /*
    for(let i = 0; i < vehiculos.length; i++) {
        if(vehiculos[i].patente == patenteBuscada) {
            console.log(vehiculos[i]) 
        }
    }
    */
}

async function agregar() {
    console.log("click")
    let marca = (document.querySelector('#marca').value);
    let modelo = document.querySelector('#modelo').value;
    let patente = document.querySelector('#patente').value;
    let anio = document.querySelector('#año').value;
    let precio = document.querySelector('#precio').value;
    let capacidadDeCarga = document.querySelector("#capacidadDeCarga").value;
    let renglon = [{
        "marca": marca,
        "modelo": modelo,
        "patente": patente,
        "anio": Number(anio),
        "precio": Number(precio),
        "capacidadDeCarga": Number(capacidadDeCarga)
    }
    ]
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
        if (vehiculos[i].capacidadDeCarga == undefined) {
            vehiculos[i].capacidadDeCarga = "-";
        }
        html += `
        <tr>
        <td ><a href="http://localhost:3000/vehiculoDetail.html?id=${i}&marca=${vehiculos[i].marca}&modelo=${vehiculos[i].modelo}&patente=${vehiculos[i].patente}&anio=${vehiculos[i].anio}&precio=${vehiculos[i].precio}&capacidadDeCarga=${vehiculos[i].capacidadDeCarga}">${vehiculos[i].marca}</a></td>
        <td>${vehiculos[i].modelo}</td>
        <td>${vehiculos[i].patente}</td>
        <td>${vehiculos[i].anio}</td>
        <td>${vehiculos[i].precio}</td>
        <td>${vehiculos[i].capacidadDeCarga}</td>
        <td><button class="btnDelVehiculo" pos="${i}">Borrar</button></td>
        </tr>
        `;
    }
    document.querySelector("#tblVehiculos").innerHTML = html;
    borrarBotones(".btnDelVehiculo");
}

async function borrarBotones(clase) {
    let botonesBorrar = document.querySelectorAll(clase);

    for (let i = 0; i < botonesBorrar.length; i++) {

        botonesBorrar[i].addEventListener("click", async () => {
            console.log('Borrar')
           // let posicion = this.pos;
           // console.log(posicion)
            let respuesta = await fetch(`/vehiculos/${this.pos}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
            if (respuesta.ok) {
                load();
                return "Vehiculo borrado con exito";
            }
            else {
                return "Error en el borrado";
            }
        }

        )

    }
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