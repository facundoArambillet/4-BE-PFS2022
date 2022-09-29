
let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let computadoras = [];



async function agregar() {
    console.log("Función Agregar");
    let identificador = parseInt(document.querySelector('#identificador').value);
    let SO = document.querySelector('#so').value;
    let memoriaRam = document.querySelector('#memoriaRam').value;
    let discoRigido = document.querySelector('#discoRigido').value;
    let tarjetaGrafica = document.querySelector('#tarjetaGrafica').value;
    let renglon = {
        "id": identificador,
        "sistemaOperativo": SO,
        "tipoDeMemoria": memoriaRam,
        "tipoDeDisco": discoRigido,
        "tipoDePlacaDeVideo": tarjetaGrafica
    }
    let respuesta = await fetch("/computadora2", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(renglon)
    });

    if (respuesta.ok) {
        computadoras.push(renglon);
        load()
    } else {
        console.log('Hubo un error');
    }
}

function mostrarComputadoras() {
    console.log(computadoras)
   let identificador = document.querySelector('#identificador');
   identificador.value = computadoras.length + 1;
    let html = "";
    for (let i = 0; i < computadoras.length; i++) {
        html += `
        <tr>
        <td>${computadoras[i].id}</td>
        <td>${computadoras[i].sistemaOperativo}</td>
        <td>${computadoras[i].tipoDeMemoria}</td>
        <td>${computadoras[i].tipoDeDisco}</td>
        <td>${computadoras[i].tipoDePlacaDeVideo}</td>
        </tr>
        `;
    }
    document.querySelector("#tblComputadoras").innerHTML = html;
}

async function load() {
    computadoras = [];
    let respuesta = await fetch('/computadora2')
    if (respuesta.ok) {
        let t = await respuesta.json()
        computadoras = t
    }
    console.log(computadoras)
    mostrarComputadoras();
}

load();