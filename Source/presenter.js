import {getMonto, addTransaction,loadTransactions} from "./TransactionManager.js"

const ingreso = document.querySelector("#ingreso");
const egreso = document.querySelector("#egreso");
const CampoMonto = document.getElementById("MontoField");

const TransacionList = document.getElementById("TransacionList");
const montoTransaccion = document.querySelector("#montoTransaccion");
const tituloTransaccion = document.querySelector("#tituloTransaccion");
const categoriaInput = document.getElementById("categoriaInput");
const fechaInput = document.getElementById("fechaInput");


function addNewTransaction(type)
{
    let dinero = Number.parseInt(montoTransaccion.value)
    let titulo = tituloTransaccion.value
    let categoria = categoriaInput.value
    let fecha = Date(fechaInput.value)
    addTransaction(dinero,type,titulo,categoria,fecha,CampoMonto,TransacionList)
}

ingreso.addEventListener("click", (event) => {
    event.preventDefault();
    addNewTransaction("ingreso")
});

egreso.addEventListener("click", (event) => {
    event.preventDefault();
    addNewTransaction("egreso")
});

function LoadFunction()
{
    getMonto(CampoMonto)
    loadTransactions(TransacionList)
}

document.onload=LoadFunction()