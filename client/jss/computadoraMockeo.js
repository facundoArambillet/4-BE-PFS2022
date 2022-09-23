
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
    let renglon = {
        "identificador": identificador,
        "SO": SO,
        "memoriaRam": memoriaRam,
        "discoRigido": discoRigido,
    }
    computadoras.push(renglon);
    mostrarComputadoras();
}


function mostrarComputadoras() {
    let html = "";
    for(let i = 0; i < computadoras.length; i++) {
        html += `
        <tr>
        <td>${computadoras[i].identificador}</td>
        <td>${computadoras[i].SO}</td>
        <td>${computadoras[i].memoriaRam}</td>
        <td>${computadoras[i].discoRigido}</td>
        </tr>
        `;
    }
    document.querySelector("#tblComputadoras").innerHTML = html;
}

async function load() {
    let container = document.querySelector("#tblComputadoras");
    let respuesta = await fetch('./jss/mockeoCompu.json')
    console.log(respuesta)
    if(respuesta.ok) {
        let mock = await respuesta.json()
        container.innerHTML = mock
        computadoras = mock.computadoras
    }
    mostrarComputadoras();
}