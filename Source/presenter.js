import { getMonto,LoadPhantom } from "./TransactionManager.js"


const CampoMonto = document.getElementById("MontoField");
const TransacionList =document.getElementById("TransacionList");
function LoadFunction()
{
    CampoMonto.innerHTML=getMonto()
    
    LoadPhantom(TransacionList)
}

document.onload=LoadFunction()