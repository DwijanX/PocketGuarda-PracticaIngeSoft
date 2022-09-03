import { getMonto } from "./TransactionManager.js"


const CampoMonto = document.getElementById("MontoField");
function LoadFunction()
{
    CampoMonto.innerHTML=getMonto()
}

document.onload=LoadFunction()