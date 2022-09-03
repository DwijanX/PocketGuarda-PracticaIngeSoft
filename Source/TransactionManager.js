function getMonto(bloqueMonto)
{
    bloqueMonto.innerHTML= 0
}


function updateMonto(transaccion, bloqueMonto)
{
    let montoActual = Number.parseFloat(bloqueMonto.innerHTML);
    if (transaccion["tipo"] == "ingreso")
    {
        montoActual += transaccion["monto"]
    }
    else
    {
        montoActual -= transaccion["monto"]
    }
    bloqueMonto.innerHTML = montoActual;
}

function addTransaction(monto, tipo, bloqueMonto)
{
    let dict = {'tipo':tipo,'monto':monto}   
    updateMonto(dict, bloqueMonto)
}





export {getMonto, addTransaction}