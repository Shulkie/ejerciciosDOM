

var ul = document.querySelector('ul');
var ulChild = ul.children ;

console.log (ulChild)


var tutu = ulChild[1] ;

console.log(tutu)


tutu.classList.add('verde');

var ruru = ulChild[3];

ruru.classList.add('rojo');

var pepe = ulChild[1].parentElement 

pepe.classList.add  ('naranja')