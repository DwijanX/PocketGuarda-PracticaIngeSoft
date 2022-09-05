import {getMonto, addTransaction,loadTransactions,loadTransactionsStats} from "./TransactionManager.js"

//Buttons
const ingreso = document.querySelector("#ingreso");
const egreso = document.querySelector("#egreso");
const getStatsButton = document.querySelector("#getStatsButton");

//outputs

const CampoMonto = document.getElementById("mainMontoField");
const ingresoMonto = document.getElementById("ingresoField");
const TransactionList = document.getElementById("TransacionList");
const StatsContainer = document.getElementById("StatsRetrievedContainer");

//inputs

const montoTransaccion = document.querySelector("#montoTransaccion");
const tituloTransaccion = document.querySelector("#tituloTransaccion");
const categoriaInput = document.getElementById("categoriaInput");
const fechaInput = document.getElementById("fechaInput");
const lowDateLimStats = document.getElementById("lowDateLimStats");
const topDateLimStats = document.getElementById("topDateLimStats");



function addNewTransaction(type)
{
    let dinero = Number.parseInt(montoTransaccion.value)
    let titulo = tituloTransaccion.value
    let categoria = categoriaInput.value
    let fecha = new Date(fechaInput.value)
    addTransaction(dinero,type,titulo,categoria,fecha,CampoMonto,ingresoMonto,TransactionList)
}
getStatsButton.addEventListener("click", (event) => {
    event.preventDefault();
    let lowLimDate=new Date(lowDateLimStats.value)
    let topLimDate=new Date(topDateLimStats.value)
    loadTransactionsStats(lowLimDate,topLimDate,StatsContainer)
});

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
    getMonto(CampoMonto, ingresoMonto)
    loadTransactions(TransactionList)
}

document.onload=LoadFunction()