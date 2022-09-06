import PhantomImg from "../Assets/Fantasmin.png";

let TransactionsList=[]

function calculateTotalAmountIncomeOutcomeBasedOnTransactionsArray(TransactionArray)
{
    let MontoValue=0;
    let ingresoValue=0;
    let egresoValue=0;
    
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
            egresoValue+=TransactionsList[i]["monto"];
        }
    }
    return [MontoValue, ingresoValue, egresoValue];
}
function getMonto(bloqueMonto, ingresoMonto, egresoMonto)
{
    let AmountArray=calculateTotalAmountIncomeOutcomeBasedOnTransactionsArray(TransactionsList)
    let monto =AmountArray[0];
    let ingreso = AmountArray[1];
    let egreso = AmountArray[2];
    if (monto<0)
        bloqueMonto.style.color = "red";
    bloqueMonto.innerHTML=monto
    ingresoMonto.innerHTML=ingreso
    egresoMonto.innerHTML=egreso
}

function LoadPhantom(TransacionListBlock)
{
    TransacionListBlock.innerHTML='<img src='+PhantomImg+' alt="Fantasma">'
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
    let InnerHtmlans='<dl class="listTransaction">'
    for(let i=0;i<TransactionsList.length;i++)
    {
        InnerHtmlans+=getHtmldtTransaction(TransactionsList[i])
    }
    if (InnerHtmlans!='<dl class="listTransaction">')
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
function getStatsHTMLSummary(TotalAmount,Income,Outcome)
{
    let ans="<p>Monto: "+TotalAmount+"</p>";
    ans+="<p>Ingreso: "+Income+"</p>";
    ans+="<p>Egreso: "+Outcome+"</p>";
    return ans;
}
function loadTransactionsStats( lowLimDate,topLimDate,TransactionStatsBlock)
{
    let TransactionsArrayToDisplay=getTransactionsMadeBetweenADate(lowLimDate,topLimDate,TransactionsList);
    let AmountArray=calculateTotalAmountIncomeOutcomeBasedOnTransactionsArray(TransactionsArrayToDisplay);
    TransactionStatsBlock.innerHTML=getStatsHTMLSummary(AmountArray[0],AmountArray[1],AmountArray[2]);
}

function updateMonto(transaccion, bloqueMonto, ingresoMonto, egresoMonto)
{
    let montoActual = Number.parseFloat(bloqueMonto.innerHTML);
    let ingreso= Number.parseFloat(ingresoMonto.innerHTML);
    let egreso= Number.parseFloat(egresoMonto.innerHTML);
    if (transaccion["tipo"] == "ingreso")
    {
        montoActual += transaccion["monto"]
        ingreso += transaccion["monto"]
    }
    else
    {
        montoActual -= transaccion["monto"]
        egreso += transaccion["monto"]
    }
    if (montoActual<0)
        bloqueMonto.style.color = "red";
    else
        bloqueMonto.style.color ="var(--quaternary-color)"
    bloqueMonto.innerHTML = montoActual;
    ingresoMonto.innerHTML = ingreso;
    egresoMonto.innerHTML = egreso;
}

function addTransaction(monto, tipo,titulo,categoria,fecha,id,bloqueMonto,ingresoMonto, egresoMonto,TransactionListBlock)
{
    let dict = {'tipo':tipo,'monto':monto,'titulo':titulo,'categoria':categoria,'fecha':fecha, 'id':id}   
    updateMonto(dict, bloqueMonto, ingresoMonto, egresoMonto)
    TransactionsList.push(dict)
    loadTransactions(TransactionListBlock)
}

function getTransaction(id, TransactionArray)
{
    let answer;
    TransactionArray.forEach((Transaction)=>
    {
        if(Transaction["id"] == id)
        {
            answer = Transaction
        }
    })
    return answer;
}

function deleteTransactionFromArray(dic, TransactionArray)
{
    for(let i=0; i<TransactionArray.length; i++)
    {
        if(TransactionArray[i]["id"] == dic["id"])
        {
            TransactionArray.splice(i,1);
        }
    }
}


function deleteTransaction(id, TransactionListBlock, bloqueMonto, ingresoMonto, egresoMonto)
{
    let dict = getTransaction(id, TransactionsList)
    deleteTransactionFromArray(dict, TransactionsList)
    let change = -dict["monto"]
    dict["monto"] = change
    updateMonto(dict, bloqueMonto, ingresoMonto, egresoMonto)
    loadTransactions(TransactionListBlock)
}


export {getMonto, addTransaction,loadTransactions,loadTransactionsStats, deleteTransaction}