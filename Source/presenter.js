import {getMonto, addTransaction,loadTransactions, differentiateValues} from "./TransactionManager.js"

const ingreso = document.querySelector("#ingreso");
const egreso = document.querySelector("#egreso");

const transaccion = document.querySelector("#transaccion");
const CampoMonto = document.getElementById("MontoField");
const ingresoMonto = document.getElementById("ingresoField");
const TransacionList = document.getElementById("TransacionList");

ingreso.addEventListener("click", (event) => {
    event.preventDefault();

    let dinero = Number.parseInt(transaccion.value)
    addTransaction(dinero,"ingreso",CampoMonto,TransacionList,ingresoMonto)

});

egreso.addEventListener("click", (event) => {
    event.preventDefault();

    let dinero = Number.parseFloat(transaccion.value)
    addTransaction(dinero,"egreso",CampoMonto,TransacionList,ingresoMonto)


});

function LoadFunction()
{
    getMonto(CampoMonto)
    differentiateValues(ingresoMonto)
    loadTransactions(TransacionList)
}

document.onload=LoadFunction()