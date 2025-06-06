var zenbakiakImg = ["media/1.jpg", "media/2.jpg", "media/3.jpg", "media/4.jpg", "media/5.jpg", "media/6.jpg", "media/7.jpg", "media/8.jpg", "media/9.jpg"];
var soluzioa = [];
var zenbakiak = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var kont = 0;
var klikAldia = 1;

function zenbakiakErakutsi() {
    document.getElementById("aukeratuSoinua").play();
    document.getElementById("img4").setAttribute("src", "media/karta.jpg");
    interID = setInterval(zenbakiaErakutsi, 1500);
    setTimeout(funtzioakEzarri, 13500)
}

function zenbakiaErakutsi() {
    if (kont != 9) {
        var a = Math.floor(Math.random() * zenbakiak.length);
        soluzioa.push(zenbakiak[a]);
        document.getElementById(("img") + String(kont)).setAttribute("src", zenbakiakImg[(zenbakiak[a] - 1)]);
        zenbakiak.splice(a, 1);
        document.getElementById("kartaSoinua").play();
        setTimeout(zenbakiaEzkutatu, 1400);
    } else {
        clearInterval(interID);
    }
    
}

function zenbakiaEzkutatu() {
    document.getElementById(("img") + String(kont)).setAttribute("src", "media/karta.jpg");
    kont += 1;
}

function zuzendu(kartaID) {
    document.getElementById("kartaSoinua").play();
    if (klikAldia == soluzioa[kartaID - 1]) {
        document.getElementById(("img") + String(kartaID - 1)).setAttribute("src", "media/thumb.png");
        klikAldia += 1;
        if (klikAldia == 10) {
            document.getElementById("irabaziSoinua").play();
            document.getElementById("mezua").style.visibility = "visible";
            document.getElementById("mezua").innerHTML = "Zorionak!";
            document.getElementById("btnBerriro").style.visibility = "visible";
            denakTxuriak();
            funtzioakEzabatu();
        }
    } else {
        document.getElementById(("img") + String(kartaID - 1)).setAttribute("src", "media/thumb_down.png");
        setTimeout(bueltaEman, 1000);
        klikAldia = 1;
    }

}

function bueltaEman() {
    for (var i = 0; i < 9; i++) {
        document.getElementById(("img") + String(i)).setAttribute("src", "media/karta.jpg");
    }
}

function denakTxuriak() {
    for (var i = 0; i < 9; i++) {
        while (i == 4) {
            document.getElementById("img4").setAttribute("src", "media/zorionak.jpg");
            i++;  
        }
        document.getElementById(("img") + String(i)).setAttribute("src", "media/txuria.jpg");
    }
}

function reset() {
    soluzioa = [];
    zenbakiak = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    kont = 0;
    klikAldia = 1;
    document.getElementById("mezua").style.visibility = "hidden";
    document.getElementById("mezua").innerHTML = "";
    document.getElementById("btnBerriro").style.visibility = "hidden";
    bueltaEman();
    funtzioakEzabatu();
    zenbakiakErakutsi();
}

function funtzioakEzarri() {
    for (var z = 0; z < 9; z++) {
        document.getElementById(("img") + String(z)).setAttribute("onclick", ("zuzendu(" + String(z + 1) + ")"));
    }
}

function funtzioakEzabatu() {
    for (var x = 0; x < 9; x++) {
        document.getElementById(("img") + String(x)).setAttribute("onclick", "");
    }
}