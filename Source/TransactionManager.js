let TransactionsList=[]

function calculateMontoBasedOnTransactionsArray(TransactionArray)
{
    let MontoValue=0;
    let ingresoValue=0;
    for(let i=0;i<TransactionArray.length;i++)
    {
        if (TransactionArray[i]["tipo"]=="ingreso")
        {
            MontoValue+=TransactionsList[i]["monto"];
            ingresoValue+=TransactionsList[i]["monto"];
        }
        else
        {
            MontoValue-=TransactionsList[i]["monto"];
        }
    }
    return MontoValue, ingresoValue;
}
function getMonto(bloqueMonto, ingresoMonto)
{
    let monto=calculateMontoBasedOnTransactionsArray(TransactionsList);
    let ingreso = calculateMontoBasedOnTransactionsArray(TransactionsList);
    if (monto<0)
        bloqueMonto.style.color = "red";
    bloqueMonto.innerHTML=monto
    ingresoMonto.innerHTML=ingreso
}

function LoadPhantom(TransacionListBlock)
{
    TransacionListBlock.innerHTML='<img src="./Assets/Fantasmin.png" alt="Fantasma">'
}
function getHtmldtTransaction(Transaction)
{
    let ans='<dt><span id="title">'+Transaction["titulo"]+'</span></dt>'
    Object.keys(Transaction).forEach((TransactionField)=>
    {
        if (TransactionField!="titulo")
        {
            ans+="<dd>"+TransactionField+": "+Transaction[TransactionField]+"</dd>"
        }
    })
    return ans;
}
function getTransactionListHTMLAnswer()
{
    let InnerHtmlans="<dl>"
    for(let i=0;i<TransactionsList.length;i++)
    {
        InnerHtmlans+=getHtmldtTransaction(TransactionsList[i])
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
function getTransactionsMadeBetweenADate(lowLimDate,topLimDate,TransactionArray)
{
    let AnsArray=[]
    TransactionArray.forEach((Transaction)=>
    {
        if(Transaction["fecha"].getTime()>=lowLimDate.getTime() && Transaction["fecha"].getTime()<=topLimDate.getTime())
        {
            AnsArray.push(Transaction)
        }
    })
    return AnsArray
}
function loadTransactionsStats( lowLimDate,topLimDate,TransactionStatsBlock)
{
    let TransactionsArrayToDisplay=getTransactionsMadeBetweenADate(lowLimDate,topLimDate,TransactionsList);
    let MontoInDateRange=calculateMontoBasedOnTransactionsArray(TransactionsArrayToDisplay)
    TransactionStatsBlock.innerHTML="<p>Monto usado en el rango ingresado: "+MontoInDateRange+"</p>";
}

function updateMonto(transaccion, bloqueMonto, ingresoMonto)
{
    let montoActual = Number.parseFloat(bloqueMonto.innerHTML);
    let ingreso= Number.parseFloat(ingresoMonto.innerHTML);
    if (transaccion["tipo"] == "ingreso")
    {
        montoActual += transaccion["monto"]
        ingreso += transaccion["monto"]
    }
    else
    {
        montoActual -= transaccion["monto"]
    }
    if (montoActual<0)
        bloqueMonto.style.color = "red";
    else
    bloqueMonto.style.color ="var(--quaternary-color)"
    bloqueMonto.innerHTML = montoActual;
    ingresoMonto.innerHTML = ingreso;
}
function addTransaction(monto, tipo,titulo,categoria,fecha, bloqueMonto,transactionMonto,TransactionListBlock)
{
    let dict = {'tipo':tipo,'monto':monto,'titulo':titulo,'categoria':categoria,'fecha':fecha}   
    updateMonto(dict, bloqueMonto, transactionMonto)
    TransactionsList.push(dict)
    loadTransactions(TransactionListBlock)
}


export {getMonto, addTransaction,loadTransactions,loadTransactionsStats}