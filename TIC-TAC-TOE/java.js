var sakatu_kop=0
var botarray=[0,0,0,0,0,0,0,0,0]
var ir=0
var ga=0

function sakatu(){
    var sakatutakobotoia=event.srcElement.id;
    var bot=sakatutakobotoia.slice(5)
    sakatu_kop=sakatu_kop+1;
    document.getElementById(sakatutakobotoia).style.backgroundColor="red";
    botarray[bot]=1
    document.getElementById(sakatutakobotoia).disabled=true;
    
    if (sakatu_kop<5){
        aurkakoa=setTimeout(ausaz_aukeratu,100)
    }
    irabazi()
}
function ausaz_aukeratu(){
    
    var ausazkoa=Math.floor(Math.random() * 9);
    
    while (botarray[ausazkoa]!=0){
        ausazkoa=Math.floor(Math.random() * 9);
    }
    
    var ausatxt="botoi"+ausazkoa
    document.getElementById(ausatxt).style.backgroundColor="blue";
    botarray[ausazkoa]=2
    document.getElementById(ausatxt).disabled=true;
    galdu()
    
}



function irabazi(){
    if(konprobatu(1)==true){
        botiraba.style.visibility="visible"
        botgal.style.visibility="visible"
        ema.style.visibility="visible"
        botoiak.style.height=180
        ema.style.height=130
        ema.style.marginTop=10
        ematxt.innerHTML="IRABAZI DUZU"
        
        ir=ir+1
        irabatxt.innerHTML="IRABAZITAKO JOKOAK:"+ir
        clearTimeout(aurkakoa)
        for (let i=0; i<9;i++){
            botoid="botoi"+i
            document.getElementById(botoid).disabled=true;
        }
    }else if(sakatu_kop==5){
        empate()
    }
}
function galdu(){
    if(konprobatu(2)==true){
        botiraba.style.visibility="visible"
        botgal.style.visibility="visible"
        ema.style.visibility="visible"
        botoiak.style.height=180
        ema.style.height=130
        ema.style.marginTop=10
        ematxt.innerHTML="GALDU DUZU"
        ga=ga+1
        galtxt.innerHTML="GALDUTAKO JOKOAK:"+ga
        for (let i=0; i<9;i++){
            botoid="botoi"+i
            document.getElementById(botoid).disabled=true;
        }
    }
}
function empate(){
    botiraba.style.visibility="visible"
    botgal.style.visibility="visible"
    ema.style.visibility="visible"
    botoiak.style.height=180
    ema.style.height=130
    ema.style.marginTop=10
    ematxt.innerHTML="BERDINKETA"
}
function konprobatu(x){
    if(botarray[0]==x & botarray[1]==x & botarray[2]==x){
        return true
   }
    if(botarray[3]==x & botarray[4]==x & botarray[5]==x){
        return true
   }
    if(botarray[6]==x & botarray[7]==x & botarray[8]==x){
        return true
   }
    if(botarray[0]==x & botarray[3]==x & botarray[6]==x){
        return true
   }
    if(botarray[1]==x & botarray[4]==x & botarray[7]==x){
        return true
   }
    if(botarray[2]==x & botarray[5]==x & botarray[8]==x){
        return true
   }
    if(botarray[0]==x & botarray[4]==x & botarray[8]==x){
        return true
   }
    if(botarray[2]==x & botarray[4]==x & botarray[6]==x){
        return true
   }
}

function joko_berria(){
    sakatu_kop=0
    botarray=[0,0,0,0,0,0,0,0,0]
    for (let i=0; i<9; i++){
        botoid="botoi"+i
        document.getElementById(botoid).style.backgroundColor="white";
        document.getElementById(botoid).disabled=false;
        botiraba.style.visibility="hidden"
        botgal.style.visibility="hidden"
        botoiak.style.height=100
        ema.style.visibility="hidden"
        ema.style.height=0
        ematxt.innerHTML=""
    }
}
function reset(){
    joko_berria()
    ir=0
    ga=0
    irabatxt.innerHTML="IRABAZITAKO JOKOAK:"
    galtxt.innerHTML="GALDUTAKO JOKOAK:"
}
