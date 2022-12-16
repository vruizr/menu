let contador = 0;

const valor= document.querySelector("#valor");
const botones = document.querySelectorAll(".boton")

botones.forEachi(boton => {
    boton.addEventListener["click", funcion(e){

        const estilos = e.currentTarget.classList;

        if(estilos.contains("Disminuir")) {
            contador = contador-3.5;
        }
        else(estilos.contains("Aumentar")) {
            contador = contador+3.5;
        }
            valor.textContent=contador;
    }]
})
