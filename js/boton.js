
var desplazamiento, duplicado; 

function inicia() {
/* REFERENCIA AL ELEMENTO DONDE SE VA A COPIAR EL CONTENIDO */
duplicado = document.querySelector("#copia"); 

/* COPIA EL CONTENIDO A LA CAPA VISIBLE */
duplicado.innerHTML = document.getElementById("original").innerHTML; 

/* PASA EL ANCHO DEL CONTENIDO A LA CAPA VISIBLE */
duplicado.style.width = document.getElementById("original").clientWidth + "px"; 

/* EJECUTA LA FUNCIÓN PARA UBICAR INICIALMENTE LA CAPA VISIBLE */
mueve(); 
}

function mueve() {
/* PASA DISTANCIA DESPLAZADA AL DUPLICADO COMO top NEGATIVO */
duplicado.style.top = -pageYOffset + "px"; 
}

onload = inicia; 
onscroll = mueve;



