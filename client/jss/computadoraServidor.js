
let btnAgregar = document.querySelector("#btnAgregar");
btnAgregar.addEventListener("click", agregar);
let computadoras = [];

load()


function agregar() {
    console.log("Función Agregar");
    let identificador = parseInt(document.querySelector('#identificador').value);
    let SO = document.querySelector('#so').value;
    let memoriaRam = document.querySelector('#memoriaRam').value;
    let discoRigido = document.querySelector('#discoRigido').value;
    let tarjetaGrafica = document.querySelector('#tarjetaGrafica').value;
    let renglon = {
        "identificador": identificador,
        "SO": SO,
        "memoriaRam": memoriaRam,
        "discoRigido": discoRigido,
        "tarjetaGrafica" : tarjetaGrafica
    }
    computadoras.push(renglon);
    mostrarComputadoras();
}


function mostrarComputadoras() {
    let html = "";
    console.log(computadoras)
    for(let i = 0; i < computadoras.length; i++) {
        html += `
        <tr>
        <td>${computadoras[i].identificador}</td>
        <td>${computadoras[i].SO}</td>
        <td>${computadoras[i].memoriaRam}</td>
        <td>${computadoras[i].discoRigido}</td>
        <td>${computadoras[i].tarjetaGrafica}</td>
        </tr>
        `;
    }
    document.querySelector("#tblComputadoras").innerHTML = html;
}

async function load() {
    let respuesta = await fetch('/computadora')
    if(respuesta.ok) {
        let t = await respuesta.json()
        computadoras = t
    }
    console.log(computadoras)
    mostrarComputadoras();
}