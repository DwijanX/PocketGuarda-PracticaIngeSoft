import {getMonto, addTransaction,loadTransactions} from "./TransactionManager.js"

const ingreso = document.querySelector("#ingreso");
const egreso = document.querySelector("#egreso");

const transaccion = document.querySelector("#transaccion");
const CampoMonto = document.getElementById("MontoField");
const TransacionList = document.getElementById("TransacionList");

ingreso.addEventListener("click", (event) => {
    event.preventDefault();

    let dinero = Number.parseInt(transaccion.value)
    addTransaction(dinero,"ingreso",CampoMonto,TransacionList)

});

egreso.addEventListener("click", (event) => {
    event.preventDefault();

    let dinero = Number.parseFloat(transaccion.value)
    addTransaction(dinero,"egreso",CampoMonto,TransacionList)


});

function LoadFunction()
{
    getMonto(CampoMonto)
    loadTransactions(TransacionList)
}

document.onload=LoadFunction()