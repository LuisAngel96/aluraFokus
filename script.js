const html = document.querySelector('html');
const botonCorto = document.querySelector('.app__card-button--corto');
const botonEnfoce = document.querySelector(".app__card-button--enfoque");

botonCorto.addEventListener("click", () => {
    html.setAttribute("data-contexto", "descanso-corto")
})

botonEnfoce.addEventListener("click", () => {
    html.setAttribute("data-contexto", "enfoque")
})