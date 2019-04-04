

var botonAbrir = document.getElementById("botonA");
console.log(botonAbrir)
var agarrarModal= document.getElementById("modalWrapper");
var botonCerrar = document.getElementById('botonCerrarModal');

botonAbrir.onclick = function () {
    botonAbrir.classList.add ('displayNone');  
    botonCerrar.classList.remove ('displayNone');
    agarrarModal.classList.remove('displayNone');
}

botonCerrar.onclick = function (){
    agarrarModal.classList.add ('displayNone');
    botonAbrir.classList.remove('displayNone');
    botonCerrar.classList.add ('displayNone');

    
}

