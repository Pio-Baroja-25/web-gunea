var botar=[]
var botban=[]
var banderak=10
var kenduta=[]
var botdesakti=[]
var sec=100
var kontagailu =setInterval(kronometro,1)
clearInterval(kontagailu)

document.addEventListener("contextmenu", function(event){
    event.preventDefault()
})

for(let k=0;k<100;k++){
    botar.push(0)
    botban.push(false)
    kenduta.push(false)
    botdesakti.push(false)
}

function botsortu(){
    x=0
    for(let i=0;i<100;i++){
        let bot = document.createElement("BUTTON")
        bot.id = "b"+i
        taula.appendChild(bot)
        bot.addEventListener("click",sakatu)
        bot.addEventListener("contextmenu", (event) => sakatu(event))
        document.getElementById(bot.id).style.backgroundImage = "url('botoia.jpg')"
    }
}

function susto(){
    document.getElementById("aurpegi").style.backgroundImage = "url(aurpegiclick.jpg)"
    setTimeout(normal,200)
}
function normal(){
    document.getElementById("aurpegi").style.backgroundImage = "url(aurpegia.jpg)"
}
function eskubickick(event) {
    if (event.button==2){
        return true
    }else{
        return false
    }
}

function kronometro(){
    sec=sec-1
    denbora.innerHTML=sec
    if (sec==0){
        galdu()
    }
}

function konprobatu(){
    var faltan=0
    for (let i = 0; i < 100; i++) {
        if (kenduta[i] === true && botar[i] !== 10) {
            faltan=faltan+1
        }
    }
    if(faltan==90){
        return true
    }else{
        return false
    }
}

function sakatu(event){
    clearInterval(kontagailu)
    kontagailu=setInterval(kronometro,1000)
    let sbotoia = event.target
    let botid = sbotoia.id
    let index = Number(botid.slice(1))
    if (kenduta[index]==false){
        if (eskubickick(event)==false){
            if(botban[index]==false){
                if (botar[index]==10){
                    galdu()
                }else{
                    if(botar[index]==0){
                        document.getElementById(botid).style.backgroundImage = "url('" + botar[index] +    ".jpg')"
                        hustu(index)
                        kenduta[index]=true
                    }else{
                        document.getElementById(botid).style.backgroundImage = "url('" + botar[index] + ".jpg')"
                        kenduta[index]=true
                    } 
                    document.getElementById(botid).disabled=true
                    botdesakti[index]=true
                    if(konprobatu()==true){
                        irabazi()
                    }else{
                        susto()
                    }
                }
            }
        }else{
            if (botban[index]==false){
                if (banderak>0){
                    document.getElementById(botid).style.backgroundImage = "url('flag.jpg')"
                    botban[index] = true
                    banderak=banderak-1
                }
            }else{
                document.getElementById(botid).style.backgroundImage = "url('botoia.jpg')"
                botban[index] = false
                banderak=banderak+1
            }
            banderakont.innerHTML=banderak
        }
    }
}

function hustu(pos){
    let id=""
    botar[pos]=33
    if (goian(pos)==false){
        if (ezkerrean(pos)==false){
            id="b"+(pos-11)
            document.getElementById(id).style.backgroundImage = "url('" + botar[pos-11] + ".jpg')"
            document.getElementById(id).disabled=true
            kenduta[pos-11]=true
            if (botar[pos-11]==0){
                hustu(pos-11)
            }
        }
        id="b"+(pos-10)
        document.getElementById(id).style.backgroundImage = "url('" + botar[pos-10] + ".jpg')"
        document.getElementById(id).disabled=true
        kenduta[pos-10]=true
        if (botar[pos-10]==0){
            hustu(pos-10)
        }
        if (eskubian(pos)==false){
            id="b"+(pos-9)
            document.getElementById(id).style.backgroundImage = "url('" + botar[pos-9] + ".jpg')"
            document.getElementById(id).disabled=true
            kenduta[pos-9]=true
            if (botar[pos-9]==0){
                hustu(pos-9)
            }
        }
    }
    if (ezkerrean(pos)==false){
        id="b"+(pos-1)
        document.getElementById(id).style.backgroundImage = "url('" + botar[pos-1] + ".jpg')"
        document.getElementById(id).disabled=true
        kenduta[pos-1]=true
        if (botar[pos-1]==0){
            hustu(pos-1)
        }
    }
    if (eskubian(pos)==false){
        id="b"+(pos+1)
        document.getElementById(id).style.backgroundImage = "url('" + botar[pos+1] + ".jpg')"
        document.getElementById(id).disabled=true
        kenduta[pos+1]=true
        if (botar[pos+1]==0){
            hustu(pos+1)
        }
    }
    if (behean(pos)==false){
        if (ezkerrean(pos)==false){
            id="b"+(pos+9)
            document.getElementById(id).style.backgroundImage = "url('" + botar[pos+9] + ".jpg')"
            document.getElementById(id).disabled=true
            kenduta[pos+9]=true
            if (botar[pos+9]==0){
                hustu(pos+9)
            }
        }
        id="b"+(pos+10)
        document.getElementById(id).style.backgroundImage = "url('" + botar[pos+10] + ".jpg')"
        document.getElementById(id).disabled=true
        kenduta[pos+10]=true
        if (botar[pos+10]==0){
            hustu(pos+10)
        }
        if (eskubian(pos)==false){
            id="b"+(pos+11)
            document.getElementById(id).style.backgroundImage = "url('" + botar[pos+11] + ".jpg')"
            document.getElementById(id).disabled=true
            kenduta[pos+11]=true
            if (botar[pos+11]==0){
                hustu(pos+11)
            }
        }
    }
}

function goian(pos){
    if(pos<10){
        return true
    }else{
        return false
    }
}
function behean(pos){
    if(pos>89){
        return true
    }else{
        return false
    }
}
function ezkerrean(pos){
    if(pos%10==0){
        return true
    }else{
        return false
    }
}
function eskubian(pos){
    if(pos%10==9){
        return true
    }else{
        return false
    }
}

function ondokoakjarri(pos){
    if (goian(pos)==false){
        if (ezkerrean(pos)==false){
            if (botar[pos-11]!=10){
                botar[pos-11]=botar[pos-11]+1
            }
        }
        if (botar[pos-10]!=10){
            botar[pos-10]=botar[pos-10]+1
        }
        if (eskubian(pos)==false){
            if (botar[pos-9]!=10){
                botar[pos-9]=botar[pos-9]+1
            }
        }
    }
    if (ezkerrean(pos)==false){
        if (botar[pos-1]!=10){
            botar[pos-1]=botar[pos-1]+1
        }
    }
    if (eskubian(pos)==false){
        if (botar[pos+1]!=10){
            botar[pos+1]=botar[pos+1]+1
        }
    }
    if (behean(pos)==false){
        if (ezkerrean(pos)==false){
            if (botar[pos+9]!=10){
                botar[pos+9]=botar[pos+9]+1
            }
        }
        if (botar[pos+10]!=10){
            botar[pos+10]=botar[pos+10]+1
        }
        if (eskubian(pos)==false){
            if (botar[pos+11]!=10){
                botar[pos+11]=botar[pos+11]+1
            }
        }
    }  
}

function galdu(){
    clearInterval(kontagailu)
    erakutsi()
    emaitza.innerHTML="Galdu duzu!"
    document.getElementById("aurpegi").style.backgroundImage = "url(gameover.jpg)"
}
function irabazi(){
    clearInterval(kontagailu)
    erakutsi()
    emaitza.innerHTML="Irabazi duzu!"
    document.getElementById("aurpegi").style.backgroundImage = "url(win.jpg)"
}
function erakutsi(){
    for(let i=0;i<100;i++){
        botoijarriorain="b"+i
        document.getElementById(botoijarriorain).style.backgroundImage = "url('" + botar[i] + ".jpg')"
        document.getElementById(botoijarriorain).disabled= true
        banderakont.innerHTML=10
    }
}

function minakjarri(){
    for(let i=0;i<10;i++){
        lekua=Math.floor(Math.random()*100)
        while (botar[lekua]==10){
            lekua=Math.floor(Math.random()*100)
        }
        botar[lekua]=10
        ondokoakjarri(lekua)
    }
}
function sortu(){
    botsortu()
    minakjarri()
}
function reset(){
    botar=[]
    botban=[]
    banderak=10
    banderakont.innerHTML=banderak
    kenduta=[]
    botdesakti=[]
    clearInterval(kontagailu)
    sec=100
    denbora.innerHTML=sec
    emaitza.innerHTML=""
    document.getElementById("aurpegi").style.backgroundImage = "url(aurpegia.jpg)"
    for(let kk=0;kk<100;kk++){
        var resetid="b"+kk
        botar.push(0)
        botban.push(false)
        kenduta.push(false)
        botdesakti.push(false)
        document.getElementById(resetid).style.backgroundImage = "url(botoia.jpg)"
        document.getElementById(resetid).disabled= false
    }
    minakjarri()
}
function home(){
    location.replace("../index.html")
}
