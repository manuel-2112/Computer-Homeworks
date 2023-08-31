const elboton1 = document.querySelector("#boton1")
const elboton2 = document.querySelector("#boton2")
const elboton3 = document.querySelector("#boton3")
const elboton4 = document.querySelector("#boton4")
const botonsuper = document.querySelector("#super")
const botonnormal = document.querySelector("#normal")

const botonatras = document.querySelector("#anterior")
const botonadelante = document.querySelector("#siguiente")
let botones = ["boton1","boton2","boton3","boton4"]

function cambiar1() {
    document.getElementById("m1").style.display = 'inline' ;
    document.getElementById("m2").style.display = 'none' ;
    document.getElementById("m3").style.display = 'none' ;
    document.getElementById("m4").style.display = 'none' ;
    let eliminados = botones.splice(0,4) ;
    botones.push("boton1") ;
    botones.push("boton2") ;
    botones.push("boton3") ;
    botones.push("boton4") ;
}

function cambiar2() {
    document.getElementById("m1").style.display = 'none' ;
    document.getElementById("m2").style.display = 'inline' ;
    document.getElementById("m3").style.display = 'none' ;
    document.getElementById("m4").style.display = 'none' ;
    let eliminados = botones.splice(0,4) ;
    botones.push("boton2") ;
    botones.push("boton3") ;
    botones.push("boton4") ;
    botones.push("boton1") ;
}

function cambiar3() {
    document.getElementById("m1").style.display = 'none' ;
    document.getElementById("m2").style.display = 'none' ;
    document.getElementById("m3").style.display = 'inline' ;
    document.getElementById("m4").style.display = 'none' ;
    let eliminados = botones.splice(0,4) ;
    botones.push("boton3") ;
    botones.push("boton4") ;
    botones.push("boton1") ;
    botones.push("boton2") ;
}

function cambiar4() {
    document.getElementById("m1").style.display = 'none' ;
    document.getElementById("m2").style.display = 'none' ;
    document.getElementById("m3").style.display = 'none' ;
    document.getElementById("m4").style.display = 'inline' ;
    let eliminados = botones.splice(0,4) ;
    botones.push("boton4") ;
    botones.push("boton1") ;
    botones.push("boton2") ;
    botones.push("boton3") ;
}

function adelante() {
    let posicion = botones.shift()
    let agregar = botones.push(posicion)
    let comparar = botones[0]
    if (comparar=="boton1"){
        cambiar1()
    }
    if (comparar=="boton2"){
        cambiar2()
    }
    if (comparar=="boton3"){
        cambiar3()
    }
    if (comparar=="boton4"){
        cambiar4()
    }
}

function atras() {
    let posicion = botones.pop()
    let agregar = botones.unshift(posicion)
    let comparar = botones[0]
    if (comparar=="boton1"){
        cambiar1()
    }
    if (comparar=="boton2"){
        cambiar2()
    }
    if (comparar=="boton3"){
        cambiar3()
    }
    if (comparar=="boton4"){
        cambiar4()
    }
}

function modosuper() {
    document.getElementById("body").style.backgroundImage='url(https://images.alphacoders.com/741/thumb-1920-741098.jpg)';
    document.getElementById("super").style.display = 'none' ;
    document.getElementById("normal").style.display = 'inline' ;
    document.getElementById("cabeza").style.background = 'tomato' ;
}

function modonormal() {
    document.getElementById("body").style.backgroundColor='#C2CAC0';
    document.getElementById("body").style.backgroundImage= 'none';
    document.getElementById("normal").style.display = 'none' ;
    document.getElementById("super").style.display = 'inline' ;
    document.getElementById("cabeza").style.background = 'skyblue' ;
}

cambiar1()
modonormal()
elboton1.addEventListener("click",cambiar1)
elboton2.addEventListener("click",cambiar2)
elboton3.addEventListener("click",cambiar3)
elboton4.addEventListener("click",cambiar4)
botonadelante.addEventListener("click",adelante)
botonatras.addEventListener("click",atras)
botonsuper.addEventListener("click",modosuper)
botonnormal.addEventListener("click",modonormal)