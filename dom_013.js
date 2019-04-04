

// Agregar la etiqueta script
// Seleccionar el elemento body
// Crear un array con 10 nombres
// Crear un elemento ul
// Recorrer el array nombres y por cada uno crear un elemento li y asignar el texto correspondiente
// Ir insertando cada elemento li dentro de la lista ul
// Insertar el elemento ul dentro del body


var elemento = document.querySelector ('body');


var array = ['Rosi','Maqui','pepita', 'pepito', 'juana']

var nuevoUl = document.createElement ('ul');



for (let index = 0; index < array.length; index++) {
var masUl = document.createElement('li');
masUl.textContent = array[index]
nuevoUl.appendChild (masUl)
}
console.log(nuevoUl)

elemento.appendChild(nuevoUl)


var caca = document.querySelector('button');
caca.onclick = function(){
    console.log ('pis')
} 


var pepe = function() {
console.log('todo el mundo pide pis')    
}

caca.onmouseover = pepe


var button = document.querySelector('button');
button.addEventListener ('click',function(){
    button.classList.add('rojo')
    console.log(this)
})

;
// caca.onmouseover = function () {
//     console.log ('holi')    
// } OTRA MANERA DE HACERLO PERO SOLO APLICA A ESTA FUNCIÓN


// var divElement = document.querySelector('div');
// divElement.onmouseover = pasarConElMouse()

