var ordena=[]
var erantzuna=[]
var galdu=0
var puntu=0
var kont=0
function home(){
    location.replace("../hub.html")
}
function hasi(){
    for(let i=0;i<9;i++){
        botid="bot" + i
        document.getElementById(botid).disabled=false
    }
    document.getElementById("hasi").disabled=true
    ordena=[]
    gei=setTimeout(gehitu,1000)
}
function gehitu(){
    kont=0
    for(let i=0;i<9;i++){
        botid="bot" + i
        document.getElementById(botid).disabled=true
    }
    if (galdu==0){
        pos=Math.floor(Math.random()*9)
        ordena.push(pos)
        for (let i=0; i<ordena.length;i++){
            ikusi=setTimeout(function(){
                erakutsi(ordena[i])
            },1000*i)
        }
    }
}
function erakutsi(x){
    kont=kont+1
    if(galdu==0){
        var posid="bot"+x
        document.getElementById(posid).style.backgroundColor = "blue"
        fuera=setTimeout(function(){
            izkutatu(x)
        },800)
    }
}
function izkutatu(a){
    var posid2="bot"+a
    document.getElementById(posid2).style.backgroundColor="lightgray"
    if(kont==ordena.length){
        for(let i=0;i<9;i++){
            botid="bot" + i
            document.getElementById(botid).disabled=false
        }
    }
}
function reset(){
    document.getElementById("hasi").disabled=false
    document.getElementById("reset").disabled=true
    ordena=[]
    erantzuna=[]
    galdu=0
    puntu=0
    document.getElementById("emaitza").innerText= "Puntuak: "+puntu
    for(let i=0;i<9;i++){
        botid="bot" + i
        document.getElementById(botid).style.backgroundColor="lightgray"
    }
}
function konprobatu(){
    let sbotoia = event.target
    let botid = sbotoia.id
    let index = Number(botid.slice(3))
    erantzuna.push(index)
    for (let i=0; i<erantzuna.length;i++){
        if(ordena[i]!=erantzuna[i]){
            document.getElementById("reset").disabled=false
            galdu=1
            clearTimeout(gei)
            clearTimeout(ikusi)
            clearTimeout(fuera)
            ordena=[]
            for(let i=0;i<9;i++){
                botidgaldu="bot" + i
                document.getElementById(botidgaldu).disabled=true
                document.getElementById(botidgaldu).style.backgroundColor="red"
            }
        }
    }
    if(galdu==0){
        if(erantzuna.length==ordena.length){
            erantzuna=[]
            puntu=puntu+1
            document.getElementById("emaitza").innerText = "Puntuak: "+puntu
            setTimeout(gehitu,100)
        }
    }
}