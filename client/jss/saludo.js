"use strict";

let inputNombre = document.getElementById('nombre')
let saludo = document.getElementById('saludo')
inputNombre.addEventListener('input', saludar)

function saludar () {
    let nombre = inputNombre.value;
    saludo.innerHTML = `Bienvenido ${nombre} !!`
    console.log(saludo)
}