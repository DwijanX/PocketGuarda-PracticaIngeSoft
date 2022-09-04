let TransactionsList=[]

function getMonto(bloqueMonto)
{
    let MontoValue=0;
    for(let i=0;i<TransactionsList.length;i++)
    {
        MontoValue+=TransactionsList[i]["monto"];
    }
    bloqueMonto.innerHTML=MontoValue;
}
function LoadPhantom(TransacionListBlock)
{
    TransacionList.innerHTML='<img src="./Assets/Fantasmin.png" alt="Fantasma">'
}
function getHtmldtTransaction(monto,tipo)
{
    return "<dt>"+monto+"</dt>"+"<dd>"+tipo+"</dd>";
}
function getTransactionListHTMLAnswer()
{
    let InnerHtmlans="<dl>"
    for(let i=0;i<TransactionsList.length;i++)
    {
        InnerHtmlans+=getHtmldtTransaction(TransactionsList[i]["monto"],TransactionsList[i]["tipo"])
    }
    if (InnerHtmlans!="<dl>")
    {
        InnerHtmlans+="</dl>";
        return InnerHtmlans
    }
    return false
}
function loadTransactions(TransactionListBlock)
{
    let HtmlAns=getTransactionListHTMLAnswer()
    if(HtmlAns)
    {
        TransactionListBlock.innerHTML=HtmlAns
    }
    else
    {
        LoadPhantom(TransactionListBlock);
    }
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
function addTransaction(monto, tipo, bloqueMonto,TransactionListBlock)
{
    let dict = {'tipo':tipo,'monto':monto}   
    updateMonto(dict, bloqueMonto)
    TransactionsList.push(dict)
    loadTransactions(TransactionListBlock)
}


export {getMonto, addTransaction,loadTransactions}
