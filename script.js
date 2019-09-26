let boton = document.getElementById("menu");
let enlaces = document.getElementById("enlaces");
let contador = 0;

boton.addEventListener("click", function () {
    if (contador == 0) {
        enlaces.className = ("enlaces abierto");
        contador = 1;
    } else {
        enlaces.classList.remove("abierto");
        enlaces.className = ("enlaces cerrado");
        contador = 0;
    }
})