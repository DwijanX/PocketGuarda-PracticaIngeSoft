import {getMonto, addTransaction} from "./TransactionManager.js"

const ingreso = document.querySelector("#ingreso");
const egreso = document.querySelector("#egreso");

const transaccion = document.querySelector("#transaccion");
const CampoMonto = document.getElementById("MontoField");


ingreso.addEventListener("click", (event) => {
    event.preventDefault();

    let dinero = Number.parseInt(transaccion.value)
    addTransaction(dinero,"ingreso",CampoMonto)

});

egreso.addEventListener("click", (event) => {
    event.preventDefault();

    let dinero = Number.parseFloat(transaccion.value)
    addTransaction(dinero,"egreso",CampoMonto)


});

function LoadFunction()
{
    getMonto(CampoMonto)
}

document.onload=LoadFunction()