var interbaloa = 60;

var interbaloa_dinosaurioa;
var interbaloa_kontadorea;
var interbaloa_fondoa;
var interbaloa_obstakuloak;
var interbaloa_saltoa;
var interbaloa_konprobatu

// == 0 hasi gabe // == 1 hasita //
var interbaloa_dinosaurioa_egoera = 0; 
var interbaloa_kontadorea_egoera = 0; 
var interbaloa_fondoa_egoera = 0;
var interbaloa_obstakuloak_egoera = 0;
var interbaloa_saltoa_egoera = 0;
var interbaloa_konprobatu_egoera = 0;

var lehenengo_klika = 0; //  == 0 lehenengo klika // == 1 bigarren klika edo gehiago//

var posizioa_dino; // y ardatzean
var posizioa_dino_hasieran;
var salto = 17;

const SoinuaHil = new Audio("soinuak/soinua_hil.mp3");
const SoinuaSalto = new Audio("soinuak/soinua_salto.mp3");

const fotogramak = ["fotograma1.png", "fotograma2.png", "fotograma3.png", "fotograma4.png"];
var fondoa_egoera = 1;

const obstakuloak_array = ["1.png", "2.png", "3.png", "4.png"];
var posizioa_obstakuloa; // x ardatzean
var posizioa_obstakuloa_hasieran;

var dinosaurioa_egoera = 0; // dinosaurioa == 0 aurrera // dinosaurioa == 1 atzera //
var kont = 0;
var hoberena_var = 0;

var galduta = 0; // == 0 galdu ez // == 1 galduta bai //

function funtzioa_onload(){
    document.getElementById("obstakuloa").style.visibility = "hidden";
    posizioa_obstakuloa_hasieran = document.getElementById("kutxa").offsetWidth;
    posizioa_obstakuloa = posizioa_obstakuloa_hasieran;
    //alert(posizioa-obstakuloa);
    
    posizioa_dino = document.getElementById("kutxa").offsetHeight - document.getElementById("dino").offsetHeight;
    document.getElementById("dino").style.top = posizioa_dino + "px";
    
    var obstakuloak_egoera = Math.floor(Math.random() * 3);
    document.getElementById("obstakuloa").src = "irudiak/obstakuloak/" + obstakuloak_array[obstakuloak_egoera + 1];
    
    document.getElementById("kontadorea").innerHTML = "00000";
    
    document.getElementById("botoia").style.visibility = "hidden";
}

function funtzioa(){
    if (galduta == 0){
        if (lehenengo_klika == 1){
            //alert("salto")
            salto_egin();
        }

        lehenengo_klika = 1;

        if (interbaloa_konprobatu_egoera == 0){
            interbaloa_konprobatu = setInterval(konprobatu, 100);
            interbaloa_konprobatu_egoera = 1;
        }
        if (interbaloa_dinosaurioa_egoera == 0){
            interbaloa_dinosaurioa = setInterval(dinosaurioa_ibili, 100);
            interbaloa_dinosaurioa_egoera = 1;
        }
        if (interbaloa_kontadorea_egoera == 0){
            interbaloa_kontadorea = setInterval(kontadorea_eguneratu, 100);
            interbaloa_kontadorea_egoera = 1;
        }
        
        
        if (interbaloa >= 25){
        interbaloa = interbaloa - 10;
        //alert(interbaloa);
        }
        
        if (interbaloa_fondoa_egoera == 0){
            interbaloa_fondoa = setInterval(fondoa_eguneratu, interbaloa); 
            interbaloa_fondoa_egoera = 1;
        }
        if (interbaloa_obstakuloak_egoera == 0){
            interbaloa_obstakuloak = setInterval(obstakuloak_sortu, interbaloa);
            interbaloa_obstakuloak_egoera = 1;
        }
    }
}

function konprobatu() {
    // dinosaurioa
    var dinoLeft = document.getElementById("dino").offsetLeft;
    var dinoTop = document.getElementById("dino").offsetTop;
    var dinoRight = dinoLeft + document.getElementById("dino").offsetWidth;
    var dinoBottom = dinoTop + document.getElementById("dino").offsetHeight;

    // obstakuloa
    var obstLeft = document.getElementById("obstakuloa").offsetLeft;
    var obstTop = document.getElementById("obstakuloa").offsetTop;
    var obstRight = obstLeft + document.getElementById("obstakuloa").offsetWidth;
    var obstBottom = obstTop + document.getElementById("obstakuloa").offsetHeight;

    // konprobatu
    if (dinoLeft < obstRight && dinoRight > obstLeft && dinoTop < obstBottom && dinoBottom > obstTop){
        galdu();
    }
}

function galdu(){
    galduta = 1;
    
    document.getElementById("botoia").style.visibility = "visible";
    document.getElementById("dino").src = "irudiak/dinosaurioa/dino_hilda.png"
    
    clearInterval(interbaloa_dinosaurioa);
    interbaloa_dinosaurioa_egoera = 0;
    
    clearInterval(interbaloa_fondoa);
    interbaloa_fondoa_egoera = 0;
    
    clearInterval(interbaloa_konprobatu);
    interbaloa_konprobatu_egoera = 0;
    
    clearInterval(interbaloa_kontadorea);
    interbaloa_kontadorea_egoera = 0;
    
    clearInterval(interbaloa_obstakuloak);
    interbaloa_obstakuloak_egoera = 0;
    
    clearInterval(interbaloa_saltoa);
    interbaloa_saltoa_egoera = 0;    
    
    hoberena_konprobatu();
    
    SoinuaHil.play();
    
    alert("GALDU DUZU");
}

function reset(){
    galduta = 0;
    document.getElementById("dino").style.top = posizioa_dino_hasieran + "px";
    
    document.getElementById("dino").src = "irudiak/dinosaurioa/dino.png"
    
    interbaloa = 60;
    
    funtzioa_onload();
    kont = 0;
    
    lehenengo_klika = 0;
    
    funtzioa();
}

function hoberena_konprobatu(){
    document.getElementById("ezkerra").style.visibility = "visible";
    
    //alert(kont + "kont");
    //alert(hoberena_var + "hoberena");
    
    if (kont > hoberena_var){
        hoberena_var = kont;
       if (hoberena_var <10){
        document.getElementById("hoberena").innerHTML = "0000" + hoberena_var;
        }
        if (hoberena_var >= 10 && hoberena_var < 100){
            document.getElementById("hoberena").innerHTML = "000" + hoberena_var;
        }
        if (hoberena_var > 100 && hoberena_var <= 1000){
            document.getElementById("hoberena").innerHTML = "00" + hoberena_var;
        }
        if (hoberena_var >= 1000 && hoberena_var <10000){
            document.getElementById("hoberena").innerHTML = "0" + hoberena_var;
        }
        if (hoberena_var >= 10000){
            document.getElementById("hoberena").innerHTML = hoberena_var;
        } 
    }
}


function salto_egin(){
    document.getElementById("dino").style.float = "none";
    document.getElementById("dino").style.position = "absolute";
    
    if (interbaloa_saltoa_egoera == 0){
        //ez duplikatzeko
        interbaloa_saltoa = setInterval(salto_egin, 30);
        interbaloa_saltoa_egoera = 1;
        
        clearInterval(interbaloa_dinosaurioa);
        document.getElementById("dino").src = "irudiak/dinosaurioa/dino.png";
        
        var computed = window.getComputedStyle(document.getElementById("dino")).top;
        posizioa_dino = parseInt(computed);
        posizioa_dino_hasieran = posizioa_dino;
        //alert(posizioa_dino_hasieran);
        
        SoinuaSalto.play()
    }
    
    salto = salto - 1;
    posizioa_dino = posizioa_dino - salto;
    
    if (posizioa_dino <= posizioa_dino_hasieran){
        document.getElementById("dino").style.top = posizioa_dino + "px";
        //alert(posizioa_dino);
    }else{
        //alert(posizioa_dino);
        clearInterval(interbaloa_saltoa);
        interbaloa_saltoa_egoera = 0;
        salto = 17;
        clearInterval(interbaloa_dinosaurioa);
        interbaloa_dinosaurioa = setInterval(dinosaurioa_ibili, 100);
        interbaloa_dinosaurioa_egoera = 1;
    }
}


function obstakuloak_sortu(){
    document.getElementById("obstakuloa").style.visibility = "visible";
    
    document.getElementById("obstakuloa").style.position="absolute";
    document.getElementById("obstakuloa").style.left= posizioa_obstakuloa + "px";
    
    margina = (document.getElementById("behekoa").offsetWidth - document.getElementById("kutxa").offsetWidth)/2
    //alert(margina);
    
    if (posizioa_obstakuloa > document.getElementById("kutxa").style.left - margina){
        posizioa_obstakuloa = posizioa_obstakuloa - 15;
        document.getElementById("obstakuloa").style.left= posizioa_obstakuloa + "px";
    }else{
        document.getElementById("obstakuloa").style.visibility = "hidden";
        posizioa_obstakuloa = posizioa_obstakuloa_hasieran;
        
        var obstakuloak_egoera = Math.floor(Math.random() * 3);
        document.getElementById("obstakuloa").src = "irudiak/obstakuloak/" + obstakuloak_array[obstakuloak_egoera + 1];   
    }
}


function fondoa_eguneratu(){
    if (fondoa_egoera == 4){
        fondoa_egoera = 1;
    }else{
        fondoa_egoera = fondoa_egoera + 1;
    }
    //alert(fondoa_egoera);
    document.getElementById("fondoa").src = "irudiak/fondoa/" + fotogramak[fondoa_egoera- 1];
}


function kontadorea_eguneratu(){
    kont = kont + 1;
    
    if (kont<10){
        document.getElementById("kontadorea").innerHTML = "0000" + kont;
    }
    if (kont >= 10 && kont < 100){
        document.getElementById("kontadorea").innerHTML = "000" + kont;
    }
    if (kont > 100 && kont <= 1000){
        document.getElementById("kontadorea").innerHTML = "00" + kont;
    }
    if (kont >= 1000 && kont <10000){
        document.getElementById("kontadorea").innerHTML = "0" + kont;
    }
    if (kont >= 10000){
        document.getElementById("kontadorea").innerHTML = kont;
    }
    
}

function dinosaurioa_ibili(){
    if (dinosaurioa_egoera == 0){
        document.getElementById("dino").src = "irudiak/dinosaurioa/dino_atzera.png";
        dinosaurioa_egoera = 1;
    }else{
        document.getElementById("dino").src = "irudiak/dinosaurioa/dino_aurrera.png";
        dinosaurioa_egoera = 0;
    }
}