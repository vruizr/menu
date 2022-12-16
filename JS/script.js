let pizza = 0;

const valor= document.querySelector("#valor");
const botones = document.querySelectorAll(".boton")

botones.forEachi(boton => {
    boton.addEventListener["click", funcion(e){

        const estilos = e.currentTarget.classList;

        if(estilos.contains("Disminuir")) {
            pizza = pizza-3;
        }
        else(estilos.contains("Aumentar")) {
            pizza = pizza+3;
        }
            valor.textContent=pizza;
    }]
})
