var kartak = ["1_1.png", "1_2.png", "1_3.png", "1_4.png", "2_1.png", "2_2.png", "2_3.png", "2_4.png", "3_1.png", "3_2.png", "3_3.png", "3_4.png", "4_1.png", "4_2.png", "4_3.png", "4_4.png", "5_1.png", "5_2.png", "5_3.png", "5_4.png", "6_1.png", "6_2.png", "6_3.png", "6_4.png", "7_1.png", "7_2.png", "7_3.png", "7_4.png", "8_1.png", "8_2.png", "8_3.png", "8_4.png", "9_1.png", "9_2.png", "9_3.png", "9_4.png", "10_1.png", "10_2.png", "10_3.png", "10_4.png", "j1.png", "j2.png", "j3.png", "j4.png", "q1.png", "q2.png", "q3.png", "q4.png", "k1.png", "k2.png", "k3.png", "k4.png"]
var puntuazioak = [11,11,11,11,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
var atera_kartak = [];
var nire_kartak = [];
var puntuazioa_kart_nirea = 0;
var puntuazioa_kart_krupier = 0;
var lehenengo_karta_kru = 0;
var karta_kop = 0;
var karta_kop2 = 0;

var balio11 = 0;
var balio21 = 0;
var balio31 = 0;
var balio41 = 0;
var balio51 = 0;
var balio12 = 0;
var balio22 = 0;
var balio32 = 0;
var balio42 = 0;
var balio52 = 0;

var balioa = false;
var balioa2 = false;

var dirua_apostatua = 0;
var diru_totala = 0;

function onload() {
    document.getElementById("karta").disabled = "true";
    document.getElementById("gelditu").disabled = "true";
    document.getElementById("krupier3").style.visibility = "hidden";
    document.getElementById("krupier4").style.visibility = "hidden";
    document.getElementById("krupier5").style.visibility = "hidden";
    document.getElementById("nirea3").style.visibility = "hidden";
    document.getElementById("nirea4").style.visibility = "hidden";
    document.getElementById("nirea5").style.visibility = "hidden";
    document.getElementById("reset").style.visibility = "hidden";
}

function borratu() {
    document.getElementById("nahikoez").innerHTML = "";
    document.getElementById("diru_apustua").value = "";
}

function verificar_testua() {
    const input = document.getElementById("diru_apustua");
    if (input.value !== "") {
        document.getElementById("hasi").disabled = false;
    } else {
        document.getElementById("hasi").disabled = true;
    }
}

function partida_hasi() {
    const musica = document.getElementById("musica_fondo");
    musica.volume = 0.7;
    musica.play();
    dirua_apostatuta = document.getElementById("diru_apustua").value;
    diru_totala = document.getElementById("diru_kop").innerHTML;
    if (parseFloat(dirua_apostatuta) > parseFloat(diru_totala)) {
        document.getElementById("nahikoez").innerHTML = "EZ DAGO DIRU NAHIKORIK";
    } else {
        diru_totala = diru_totala - dirua_apostatuta;
        document.getElementById("diru_kop").innerHTML = diru_totala;
        document.getElementById("diru_apustua").disabled = "true";

        document.getElementById("krupier1").style.visibility = "visible";
        document.getElementById("krupier2").style.visibility = "visible";
        document.getElementById("nirea1").style.visibility = "visible";
        document.getElementById("nirea2").style.visibility = "visible";
        
        var carta1_krupier = Math.floor(Math.random() * kartak.length);
        document.getElementById("krupier1").src = "BACK.png";
        atera_kartak.push(kartak[carta1_krupier]);
        balio12 = puntuazioak[carta1_krupier];
        kartak.splice(carta1_krupier, 1);
        lehenengo_karta_kru = puntuazioak[carta1_krupier];
        puntuazioak.splice(carta1_krupier, 1);

        var carta1_nirea = Math.floor(Math.random() * kartak.length);
        document.getElementById("nirea1").src = kartak[carta1_nirea];
        atera_kartak.push(kartak[carta1_nirea]);
        balio11 = puntuazioak[carta1_nirea];
        kartak.splice(carta1_nirea, 1);
        puntuazioa_kart_nirea = puntuazioa_kart_nirea + puntuazioak[carta1_nirea];
        puntuazioak.splice(carta1_nirea, 1);

        var carta2_krupier = Math.floor(Math.random() * kartak.length);
        document.getElementById("krupier2").src = kartak[carta2_krupier];
        atera_kartak.push(kartak[carta2_krupier]);
        balio22 = puntuazioak[carta2_krupier];
        kartak.splice(carta2_krupier, 1);
        puntuazioa_kart_krupier = puntuazioa_kart_krupier + puntuazioak[carta2_krupier];
        puntuazioak.splice(carta2_krupier, 1);

        var carta2_nirea = Math.floor(Math.random() * kartak.length);
        document.getElementById("nirea2").src = kartak[carta2_nirea];
        atera_kartak.push(kartak[carta2_nirea]);
        balio21 = puntuazioak[carta2_nirea];
        kartak.splice(carta2_nirea, 1);
        puntuazioa_kart_nirea = puntuazioa_kart_nirea + puntuazioak[carta2_nirea];
        puntuazioak.splice(carta2_nirea, 1);

        var carta3_krupier = Math.floor(Math.random() * kartak.length);
        document.getElementById("krupier3").src = kartak[carta3_krupier];
        atera_kartak.push(kartak[carta3_krupier])
        balio32 = puntuazioak[carta3_krupier];
        puntuazioak.splice(carta3_krupier, 1);
        kartak.splice(carta3_krupier, 1);

        var carta3_nirea = Math.floor(Math.random() * kartak.length);
        document.getElementById("nirea3").src = kartak[carta3_nirea];
        nire_kartak.push(kartak[carta3_nirea])
        balio31 = puntuazioak[carta3_nirea];
        puntuazioak.splice(carta3_nirea, 1);
        kartak.splice(carta3_nirea, 1);

        var carta4_krupier = Math.floor(Math.random() * kartak.length);
        document.getElementById("krupier4").src = kartak[carta4_krupier];
        atera_kartak.push(kartak[carta4_krupier])
        balio42 = puntuazioak[carta4_krupier];
        puntuazioak.splice(carta4_krupier, 1);
        kartak.splice(carta4_krupier, 1);

        var carta4_nirea = Math.floor(Math.random() * kartak.length);
        document.getElementById("nirea4").src = kartak[carta4_nirea];
        nire_kartak.push(kartak[carta4_nirea])
        balio41 = puntuazioak[carta4_nirea];
        puntuazioak.splice(carta4_nirea, 1);
        kartak.splice(carta4_nirea, 1);

        var carta5_krupier = Math.floor(Math.random() * kartak.length);
        document.getElementById("krupier5").src = kartak[carta5_krupier];
        atera_kartak.push(kartak[carta5_krupier])
        balio52 = puntuazioak[carta5_krupier];
        puntuazioak.splice(carta5_krupier, 1);
        kartak.splice(carta5_krupier, 1);

        var carta5_nirea = Math.floor(Math.random() * kartak.length);
        document.getElementById("nirea5").src = kartak[carta5_nirea];
        nire_kartak.push(kartak[carta5_nirea])
        balio51 = puntuazioak[carta5_nirea];
        puntuazioak.splice(carta5_nirea, 1);
        kartak.splice(carta5_nirea, 1);

        document.getElementById("hasi").disabled = "true";
        document.getElementById("karta").disabled = false;
        document.getElementById("gelditu").disabled = false;
        

        if (puntuazioa_kart_krupier > 21) {
            puntuazioa_kart_krupier = puntuazioa_kart_krupier - 10;
        }
        if (puntuazioa_kart_nirea > 21) {
            puntuazioa_kart_nirea = puntuazioa_kart_nirea - 10;
        }

        document.getElementById("puntuak_nik").innerHTML = puntuazioa_kart_nirea;
        document.getElementById("puntuak_krupier").innerHTML = puntuazioa_kart_krupier;

        var krupier_valoretotala = puntuazioa_kart_krupier + lehenengo_karta_kru
        if (krupier_valoretotala === 21 && krupier_valoretotala === puntuazioa_kart_nirea) {
            document.getElementById("krupier_titulua").innerHTML = "PUNTUAZIO";
            document.getElementById("nik_titulua").innerHTML = "BERDINA";
            diru_totala = parseFloat(diru_totala) + parseFloat(dirua_apostatuta);
            document.getElementById("diru_kop").innerHTML = diru_totala;
            document.getElementById("krupier1").src = atera_kartak[0];
            document.getElementById("karta").disabled = "true";
            document.getElementById("gelditu").disabled = "true";
            document.getElementById("reset").style.visibility = "visible";
        } 
        if (krupier_valoretotala === 21 && krupier_valoretotala !== puntuazioa_kart_nirea) {
            document.getElementById("krupier_titulua").innerHTML = "GALDU";
            document.getElementById("nik_titulua").innerHTML = "DUZU";
            document.getElementById("sonido_perder").play();
            document.getElementById("krupier1").src = atera_kartak[0];
            document.getElementById("karta").disabled = "true";
            document.getElementById("gelditu").disabled = "true";
            document.getElementById("reset").style.visibility = "visible";
            if (diru_totala === 0) {
                document.getElementById("berriro").style.visibility="visible";
                document.getElementById("reset").style.visibility="hidden";
            }
        } 
        if (puntuazioa_kart_nirea === 21 && krupier_valoretotala !== puntuazioa_kart_nirea) {
            diru_totala = diru_totala + dirua_apostatuta * 2.5;
            document.getElementById("diru_kop").innerHTML = diru_totala;
            document.getElementById("krupier_titulua").innerHTML = "BLACK";
            document.getElementById("nik_titulua").innerHTML = "JACK";
            document.getElementById("sonido_ganar").play();
            document.getElementById("krupier1").src = atera_kartak[0];
            document.getElementById("karta").disabled = "true";
            document.getElementById("gelditu").disabled = "true";
            document.getElementById("reset").style.visibility = "visible";
        }
    }
}

function karta_berria() {
    if (karta_kop === 0) {
        document.getElementById("nirea3").style.visibility = "visible";
        karta_kop++
        puntuazioa_kart_nirea = puntuazioa_kart_nirea + balio31;
        if (puntuazioa_kart_nirea > 21 && balio31 === 11 && balioa === false) {
            balioa = true;
            puntuazioa_kart_nirea = puntuazioa_kart_nirea - 10;
        }
        if (puntuazioa_kart_nirea > 21 && (balio11 === 11 || balio21 === 11) && balioa === false) {
            puntuazioa_kart_nirea = puntuazioa_kart_nirea - 10;
            balioa = true;
        }
        document.getElementById("puntuak_nik").innerHTML = puntuazioa_kart_nirea;
        if (puntuazioa_kart_nirea === 21) {
            diru_totala = diru_totala + dirua_apostatuta * 2;
            document.getElementById("diru_kop").innerHTML = diru_totala;
            document.getElementById("reset").style.visibility = "visible";
            document.getElementById("krupier_titulua").innerHTML = "IRABAZI";
            document.getElementById("nik_titulua").innerHTML = "DUZU";
            document.getElementById("sonido_ganar").play();
            document.getElementById("krupier1").src = atera_kartak[0];
            document.getElementById("karta").disabled = "true";
            document.getElementById("gelditu").disabled = "true";
        }
        if (puntuazioa_kart_nirea > 21) {
            document.getElementById("reset").style.visibility = "visible";
            document.getElementById("krupier_titulua").innerHTML = "GALDU";
            document.getElementById("nik_titulua").innerHTML = "DUZU";
            document.getElementById("sonido_perder").play();
            document.getElementById("karta").disabled = "true";
            document.getElementById("gelditu").disabled = "true";
            if (diru_totala === 0) {
                document.getElementById("berriro").style.visibility="visible";
                document.getElementById("reset").style.visibility="hidden";
            }
        }
    }
    else if (karta_kop === 1) {
        document.getElementById("nirea4").style.visibility = "visible";
        karta_kop++
        puntuazioa_kart_nirea = puntuazioa_kart_nirea + balio41;
        if (puntuazioa_kart_nirea > 21 && (balio31 === 11 || balio41 === 11) && balioa === false) {
            balioa = true;
            puntuazioa_kart_nirea = puntuazioa_kart_nirea - 10;
        }
        if (puntuazioa_kart_nirea > 21 && (balio11 === 11 || balio21 === 11) && balioa === false) {
            puntuazioa_kart_nirea = puntuazioa_kart_nirea - 10;
            balioa = true;
        }
        document.getElementById("puntuak_nik").innerHTML = puntuazioa_kart_nirea;
        if (puntuazioa_kart_nirea === 21) {
            diru_totala = diru_totala + dirua_apostatuta * 2;
            document.getElementById("diru_kop").innerHTML = diru_totala;
            document.getElementById("reset").style.visibility = "visible";
            document.getElementById("krupier_titulua").innerHTML = "IRABAZI";
            document.getElementById("nik_titulua").innerHTML = "DUZU";
            document.getElementById("sonido_ganar").play();
            document.getElementById("krupier1").src = atera_kartak[0];
            document.getElementById("karta").disabled = "true";
            document.getElementById("gelditu").disabled = "true";
        }
        if (puntuazioa_kart_nirea > 21) {
            document.getElementById("reset").style.visibility = "visible";
            document.getElementById("krupier_titulua").innerHTML = "GALDU";
            document.getElementById("nik_titulua").innerHTML = "DUZU";
            document.getElementById("sonido_perder").play();
            document.getElementById("krupier1").src = atera_kartak[0];
            document.getElementById("karta").disabled = "true";
            document.getElementById("gelditu").disabled = "true";
            if (diru_totala === 0) {
                document.getElementById("berriro").style.visibility="visible";
                document.getElementById("reset").style.visibility="hidden";
            }
        }
    }
    else if (karta_kop === 2) {
        document.getElementById("karta").disabled = "true";
        document.getElementById("nirea5").style.visibility = "visible";
        karta_kop++
        puntuazioa_kart_nirea = puntuazioa_kart_nirea + balio51;
        if (puntuazioa_kart_nirea > 21 && (balio31 === 11 || balio41 === 11 || balio51 === 11) && balioa === false) {
            balioa = true;
            puntuazioa_kart_nirea = puntuazioa_kart_nirea - 10;
        }
        if (puntuazioa_kart_nirea > 21 && (balio11 === 11 || balio21 === 11) && balioa === false) {
            balioa = true;
            puntuazioa_kart_nirea = puntuazioa_kart_nirea - 10;
        }
        document.getElementById("puntuak_nik").innerHTML = puntuazioa_kart_nirea;
        if (puntuazioa_kart_nirea === 21) {
            diru_totala = diru_totala + dirua_apostatuta * 2;
            document.getElementById("diru_kop").innerHTML = diru_totala;
            document.getElementById("reset").style.visibility = "visible";
            document.getElementById("krupier_titulua").innerHTML = "IRABAZI";
            document.getElementById("nik_titulua").innerHTML = "DUZU";
            document.getElementById("sonido_ganar").play();
            document.getElementById("krupier1").src = atera_kartak[0];
            document.getElementById("karta").disabled = "true";
            document.getElementById("gelditu").disabled = "true";
        }
        if (puntuazioa_kart_nirea > 21) {
            document.getElementById("reset").style.visibility = "visible";
            document.getElementById("krupier_titulua").innerHTML = "GALDU";
            document.getElementById("nik_titulua").innerHTML = "DUZU";
            document.getElementById("sonido_perder").play();
            document.getElementById("krupier1").src = atera_kartak[0];
            document.getElementById("karta").disabled = "true";
            document.getElementById("gelditu").disabled = "true";
            if (diru_totala === 0) {
                document.getElementById("berriro").style.visibility="visible";
                document.getElementById("reset").style.visibility="hidden";
            }
        }
    }
}

function gelditu_partida() {
    document.getElementById("reset").style.visibility = "visible";
    document.getElementById("krupier1").src = atera_kartak[0];
    puntuazioa_kart_krupier = puntuazioa_kart_krupier + lehenengo_karta_kru;
    document.getElementById("puntuak_krupier").innerHTML = puntuazioa_kart_krupier;
    document.getElementById("karta").disabled = "true";
    document.getElementById("gelditu").disabled = "true";

    if (puntuazioa_kart_krupier < 17) {
        if (karta_kop2 === 0) {
            document.getElementById("krupier3").style.visibility = "visible";
            karta_kop2++
            puntuazioa_kart_krupier = puntuazioa_kart_krupier + balio32;
            if (puntuazioa_kart_krupier > 21 && balio32 === 11 && balioa2 === false) {
                balioa2 = true;
                puntuazioa_kart_krupier = puntuazioa_kart_krupier - 10;
            }
            if (puntuazioa_kart_krupier > 21 && balio12 === 11 || balio22 === 11 && balioa2 === false) {
                puntuazioa_kart_krupier = puntuazioa_kart_krupier - 10;
                balioa2 = true;
            }
            document.getElementById("puntuak_krupier").innerHTML = puntuazioa_kart_krupier;
        }
    }
    if (puntuazioa_kart_krupier < 17) {
        if (karta_kop2 === 1) {
            document.getElementById("krupier4").style.visibility = "visible";
            karta_kop2++
            puntuazioa_kart_krupier = puntuazioa_kart_krupier + balio42;
            if (puntuazioa_kart_krupier > 21 && (balio32 === 11 || balio42 === 11) && balioa2 === false) {
                balioa2 = true;
                puntuazioa_kart_krupier = puntuazioa_kart_krupier - 10;
            }
            if (puntuazioa_kart_krupier > 21 && balio12 === 11 || balio22 === 11 && balioa2 === false) {
                puntuazioa_kart_krupier = puntuazioa_kart_krupier - 10;
                balioa2 = true;
            }
            document.getElementById("puntuak_krupier").innerHTML = puntuazioa_kart_krupier;
        }
    }
    if (puntuazioa_kart_krupier < 17) {
        if (karta_kop2 === 2) {
            document.getElementById("krupier5").style.visibility = "visible";
            karta_kop2++
            puntuazioa_kart_krupier = puntuazioa_kart_krupier + balio52;
            if (puntuazioa_kart_krupier > 21 && (balio32 === 11 || balio42 === 11 || balio52 === 11) && balioa2 === false) {
                balioa2 = true;
                puntuazioa_kart_krupier = puntuazioa_kart_krupier - 10;
            }
            if (puntuazioa_kart_krupier > 21 && balio12 === 11 || balio22 === 11 && balioa2 === false) {
                puntuazioa_kart_krupier = puntuazioa_kart_krupier - 10;
                balioa2 = true;
            }
            document.getElementById("puntuak_krupier").innerHTML = puntuazioa_kart_krupier;
        }
    }
    if (puntuazioa_kart_krupier <= 21) {
        if (puntuazioa_kart_nirea < puntuazioa_kart_krupier) {
            document.getElementById("krupier_titulua").innerHTML = "GALDU";
            document.getElementById("nik_titulua").innerHTML = "DUZU";
            document.getElementById("sonido_perder").play();
        }
        if (puntuazioa_kart_nirea === puntuazioa_kart_krupier) {
            diru_totala = parseFloat(diru_totala) + parseFloat(dirua_apostatuta);
            document.getElementById("diru_kop").innerHTML = diru_totala;
            document.getElementById("krupier_titulua").innerHTML = "PUNTUAZIO";
            document.getElementById("nik_titulua").innerHTML = "BERDINA";
        }
        if (puntuazioa_kart_nirea > puntuazioa_kart_krupier) {
            diru_totala = diru_totala + dirua_apostatuta * 2;
            document.getElementById("diru_kop").innerHTML = diru_totala;
            document.getElementById("krupier_titulua").innerHTML = "IRABAZI";
            document.getElementById("nik_titulua").innerHTML = "DUZU";
            document.getElementById("sonido_ganar").play();
        } 
    }
    if (puntuazioa_kart_krupier > 21) {
        diru_totala = diru_totala + dirua_apostatuta * 2;
        document.getElementById("diru_kop").innerHTML = diru_totala;
        document.getElementById("krupier_titulua").innerHTML = "IRABAZI";
        document.getElementById("nik_titulua").innerHTML = "DUZU";
        document.getElementById("sonido_ganar").play();
    }
    if (diru_totala === 0) {
        document.getElementById("berriro").style.visibility="visible";
        document.getElementById("reset").style.visibility="hidden";
    }
}

function reset_partida() {
    kartak = ["1_1.png", "1_2.png", "1_3.png", "1_4.png", "2_1.png", "2_2.png", "2_3.png", "2_4.png", "3_1.png", "3_2.png", "3_3.png", "3_4.png", "4_1.png", "4_2.png", "4_3.png", "4_4.png", "5_1.png", "5_2.png", "5_3.png", "5_4.png", "6_1.png", "6_2.png", "6_3.png", "6_4.png", "7_1.png", "7_2.png", "7_3.png", "7_4.png", "8_1.png", "8_2.png", "8_3.png", "8_4.png", "9_1.png", "9_2.png", "9_3.png", "9_4.png", "10_1.png", "10_2.png", "10_3.png", "10_4.png", "j1.png", "j2.png", "j3.png", "j4.png", "q1.png", "q2.png", "q3.png", "q4.png", "k1.png", "k2.png", "k3.png", "k4.png"];
    puntuazioak = [11,11,11,11,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,6,6,6,6,7,7,7,7,8,8,8,8,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10];
    
    atera_kartak = [];
    nire_kartak = [];
    
    puntuazioa_kart_nirea = 0;
    puntuazioa_kart_krupier = 0;
    lehenengo_karta_kru = 0;
    karta_kop = 0;
    karta_kop2 = 0;

    balio11 = balio21 = balio31 = balio41 = balio51 = 0;
    balio12 = balio22 = balio32 = balio42 = balio52 = 0;

    balioa = false;
    balioa2 = false;

    document.getElementById("diru_apustua").disabled = false;
    document.getElementById("diru_apustua").value = "";

    const posizioak = ["1", "2", "3", "4", "5"];
    for (let i = 0; i < posizioak.length; i++) {
        document.getElementById("krupier" + posizioak[i]).src = "";
        document.getElementById("krupier" + posizioak[i]).style.visibility = i < 2 ? "visible" : "hidden";
        document.getElementById("nirea" + posizioak[i]).src = "";
        document.getElementById("nirea" + posizioak[i]).style.visibility = i < 2 ? "visible" : "hidden";
    }

    document.getElementById("hasi").disabled = true;
    document.getElementById("karta").disabled = true;
    document.getElementById("gelditu").disabled = true;
    document.getElementById("reset").style.visibility = "hidden";

    document.getElementById("krupier_titulua").innerHTML = "KRUPIER: <br><span id='puntuak_krupier'>0</span>";
    document.getElementById("nik_titulua").innerHTML = "NIK: <br><span id='puntuak_nik'>0</span>";
}