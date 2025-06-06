var partida=[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];
var partida_berria=[];
var berdinak=[];
var zekarta=[];
puntuak=0;
biak=0;

function sortu_partida(){
    for (i=0;i<=15;i++){
        var pos=Math.floor(Math.random()*partida.length);
        partida_berria.push(partida[pos]);
        partida.splice(pos,1);
    }
}

function buelta_eman(a){
    if (document.getElementById("karta"+a).src.includes("kartak.png")){
        document.getElementById("karta"+a).src="animaliak/"+partida_berria[a]+".png";
        berdinak[biak]=partida_berria[a];
        zekarta[biak]=a;

    //    alert(berdinak);
        biak=biak+1;
    }
}

function buelta(){
    if(biak==2){
        biak=0;
        if (berdinak[0]==berdinak[1] ){
            puntuak=puntuak+1;
            if (puntuak==8){
                alert("ZORIONAK! irabazi duzu ;)");
                reseteatu();
            }
            document.getElementById("kont").innerHTML=puntuak;
        }
        else{
            document.getElementById("karta"+zekarta[0]).src="kartak.png";
            document.getElementById("karta"+zekarta[1]).src="kartak.png";
        }
        berdinak=[];
        zekarta=[];
    }
}
function reseteatu(){
    partida=[0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7];
    partida_berria=[];
    puntuak=0;
    document.getElementById("kont").innerHTML=puntuak;
    berdinak=[];
    zekarta=[];
    for (i=0;i<=15;i++){
        document.getElementById("karta"+i).src="kartak.png";
    }
    for (i=0;i<=15;i++){
        var pos=Math.floor(Math.random()*partida.length);
        partida_berria.push(partida[pos]);
        partida.splice(pos,1);
    }
    document.getElementById("botoia").style.border = "5px solid white";
    document.getElementById("botoia").style.color="white";
}
