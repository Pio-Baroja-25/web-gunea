var posXb;
var posYb;
var directionY = 1;
var directionX = 1;
var alfaY = 1 / 2;
var alfaX = 1 / 2;
var h1 = 0;
var h2 = 0;
var p1 = 0;
var p2 = 0;
var modo = 0;
var time;
var centerXb;
var centerYb;
var centerBar1
var centerBar2;
var centerBall;
var soinuBarra = new Audio("poingbarra.wav");
var soinuBorde = new Audio("poingborde.wav");
var soinuBG = new Audio("BGsound.mp3");
document.addEventListener("keydown", function (event) {
    if (event.key === "w" && ( modo === 1 || modo === 2) && h1 - 64 >= 0) {
        h1 = h1 - 64;
        document.getElementById("barra1").style.top = h1;
    } else if (event.key === "w" && ( modo === 1 || modo === 2) && h1 - 64 < 0) {
        h1 = 0;
        document.getElementById("barra1").style.top = h1;
    }
    if (event.key === "s" && ( modo === 1 || modo === 2) && h1 + 64 < fondoa.offsetHeight - barra1.offsetHeight) {
        h1 = h1 + 64;
        document.getElementById("barra1").style.top = h1;
    } else if (event.key === "s" && ( modo === 1 || modo === 2) && h1 + 64 >= fondoa.offsetHeight - barra1.offsetHeight) {
        h1 = fondoa.offsetHeight - barra1.offsetHeight;
        document.getElementById("barra1").style.top = h1;
    }
    if (event.key === "ArrowUp") {
        if (modo === 2 && h2 - 64 >= 0) {
            h2 = h2 - 64;
            document.getElementById("barra2").style.top = h2;
        } else if (modo === 2 && h2 - 64 < 0) {
            h2 = 0;
            document.getElementById("barra2").style.top = h2;
        }
        if (modo === 1 && h1 - 64 >= 0) {
            h1 = h1 - 64;
            document.getElementById("barra1").style.top = h1;
        } else if (modo === 1 && h2 - 64 < 0) {
            h2 = 0;
            document.getElementById("barra2").style.top = h2;
        }
    }
    if (event.key === "ArrowDown") {
        if(modo === 2 && h2 + 64 < fondoa.offsetHeight - barra2.offsetHeight) {
            h2 = h2 + 64;
            document.getElementById("barra2").style.top = h2;
        } else if (modo === 2 && h2 + 64 >= fondoa.offsetHeight - barra2.offsetHeight) {
            h2 = fondoa.offsetHeight - barra2.offsetHeight;
            document.getElementById("barra2").style.top = h2;
        }
        if(modo === 1 && h1 + 64 < fondoa.offsetHeight - barra1.offsetHeight) {
            h1 = h1 + 64;
            document.getElementById("barra1").style.top = h1;
        } else if (modo === 1 && h1 + 64 >= fondoa.offsetHeight - barra1.offsetHeight) {
            h1 = fondoa.offsetHeight - barra1.offsetHeight;
            document.getElementById("barra1").style.top = h1;
        }
    }
});
function hasi() {
    soinuBG.play();
    soinuBG.loop = true;
    soinuBG.volume = 0.2;
    centerXb = fondoa.offsetWidth / 2 - bola.offsetWidth / 2;
    centerYb = fondoa.offsetHeight / 2 - bola.offsetHeight / 2;
    posXb = centerXb;
    posYb = centerYb;
    document.getElementById("bola").style.left = centerXb;
    document.getElementById("bola").style.top = centerYb;
    document.getElementById("botoiak").style.visibility = "hidden";
    document.getElementById("bola").style.visibility = "visible";
    document.getElementById("barra1").style.visibility = "visible";
    document.getElementById("barra2").style.visibility = "visible";
    document.getElementById("kontadorea").style.visibility = "visible";
    document.getElementById("barra2").style.left = fondoa.offsetWidth - 16;
    document.getElementById("kontadorea").style.left = fondoa.offsetWidth / 2 - kontadorea.offsetWidth / 2;
    document.getElementById("puntuazioa").innerHTML = p1 + "/" + p2;
    time = setInterval("mugimendua()", 10);
}
function joku1() {
    modo = 1;
    hasi();
}
function joku2() {
    modo = 2;
    hasi();
}
function IA() {
    if (modo === 1 && directionX === 1) {
        if (centerBall < centerBar2 - 16) {
            h2 = h2 - 4;
        } else if (centerBall > centerBar2 + 16) {
            h2 = h2 + 4;
        } else {
            h2 = h2;
        }
        document.getElementById("barra2").style.top = h2;
    }
}
function hzu() {
    posXb = posXb + directionX * alfaX * 8;
    posYb = posYb + directionY * alfaY * 8;
    if (posYb < 0){
        soinuBorde.play();
        posYb = 0;
        directionY = directionY - 2 * directionY;
    }
    if (posYb > fondoa.offsetHeight - bola.offsetHeight) {
        soinuBorde.play();
        posYb = fondoa.offsetHeight - bola.offsetHeight;
        directionY = directionY - 2 * directionY;
    }
    document.getElementById("bola").style.top = posYb;
    document.getElementById("bola").style.left = posXb;
}
function angelu() {
    if (posXb >= fondoa.offsetWidth - 16 && posYb <= barra2.offsetTop + barra2.offsetHeight && posYb >= barra2.offsetTop) {
        soinuBarra.play();
        posXb = fondoa.offsetWidth - 16;
        directionX = directionX - 2 * directionX;
        alfaX = Math.cos(((centerBar2 - centerBall) / (barra2.offsetHeight / 2)) * Math.PI / 3);
        alfaY = Math.sin(((centerBar2 - centerBall) / (barra2.offsetHeight / 2)) * Math.PI / 3);
    } else if (posXb <= 16 && posYb <= barra1.offsetTop + barra1.offsetHeight && posYb >= barra1.offsetTop) {
        soinuBarra.play();
        posXb = 16;
        directionX = directionX - 2 * directionX;
        alfaX = Math.cos(((centerBar1 - centerBall) / (barra1.offsetHeight / 2)) * Math.PI / 3);
        alfaY = Math.sin(((centerBar1 - centerBall) / (barra1.offsetHeight / 2)) * Math.PI / 3);
    }
}
function tanto() {
    if (posXb <= 0) {
        p2 = p2 + 1;
        restart();  
    } else if (posXb >= fondoa.offsetWidth) {
        p1 = p1 + 1;
        restart();
    }
    document.getElementById("puntuazioa").innerHTML = p1 + "/" + p2;
}
function restart() {
    directionX = directionX - 2 * directionX;
    directionY = directionY - 2 * directionY;
    posXb = centerXb;
    posYb = centerYb;
    alfaX = 1 / 2;
    alfaY = 1 / 2;
}
function mugimendua() {
    centerBall = bola.offsetTop + bola.offsetHeight / 2;
    centerBar1 = barra1.offsetTop + barra1.offsetHeight / 2;
    centerBar2 = barra2.offsetTop + barra2.offsetHeight / 2;
    IA();
    angelu()
    hzu();
    tanto()
}