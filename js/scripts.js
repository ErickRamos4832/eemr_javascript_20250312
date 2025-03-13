let mensaje = document.getElementById("mensajito");
console.log(mensaje.innerText);
//alert(mensaje.innerText);

let variable; //declarando una variable vacia
variable = 1.666; //asignando un valor
console.log("el tipo de dato es: "+typeof variable); //conocer el tipo de dato de una variable
console.log("el valor de la variable es: "+variable); //conocer el valor de una variable

variable = false; //asignando un valor a la variable
console.log("el tipo de dato es: "+typeof variable);
console.log("el valor de la variable es: "+variable);

variable = "hola mundo";
console.log("el tipo de dato es: "+typeof variable);
console.log("el valor de la variable es: "+variable);

function calcular(sumando1,sumando2,salida){
    let sumando1_obj = document.getElementById(sumando1);
    let sumando2_obj = document.getElementById(sumando2);
    let calculo = (parseFloat(sumando1_obj.innerText) + parseFloat(sumando2_obj.innerText));

    document.getElementById(salida).innerHTML = calculo;
}

function crearElemento(url = null){
    if(url == null){
        url = url
    }else{
        url = "https://as2.ftcdn.net/jpg/01/09/00/83/220_F_109008395_OQDupHMza1V6CNOzrJwWaklaktT4IsRW.jpg"
    }
    let objetoimagen = document.createElement("img");
    objetoimagen.id="imagencreada";
    objetoimagen.src = url;
    objetoimagen.alt = "Icono Control de Videojuego";
    objetoimagen.title = "Control de Videojuego";
    objetoimagen.width = 220;
    objetoimagen.height = 165;
    objetoimagen.addEventListener('click',function(){
        objetoimagen.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkU5595AC-bbsoPF-Ik0WzUbVj9rnAbs9lkw&s";
        objetoimagen.width = 225;
        objetoimagen.height = 225;
    });
    document.getElementById('lienzo').appendChild(objetoimagen);
}