let TransactionsList=[]
function getMonto()
{
    let MontoValue=0;
    for(let i=0;i<TransactionsList.length;i++)
    {
        MontoValue+=TransactionsList[i]["monto"];
    }
    return MontoValue;
}
function addTransactionToTransactionList(Transaction)
{
    TransactionsList.push(Transaction);
}
function LoadPhantom(TransacionListBlock)
{
    TransacionListBlock.innerHTML='<img src="./Assets/Fantasmin.png" alt="Fantasma">';
}

export {getMonto,LoadPhantom}