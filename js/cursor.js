/*Objeto que selecciona al cursor de css*/
const ringCursor = document.querySelector(".ring");
const circleCursor = document.querySelector(".circle");
/*Objeto que selecciona los links*/
let itemGrow = document.querySelectorAll(".grow");
/*Listeners*/
window.addEventListener("mousemove", cursor);
window.addEventListener("click", click);
/*Esta función da las coordenadas del cursor*/
function cursor(e) {
    ringCursor.style.top = e.pageY + "px";
    circleCursor.style.top = e.pageY + "px";
    ringCursor.style.left = e.pageX + "px";
    circleCursor.style.left = e.pageX + "px";
}
/*Esta función es la animación de click*/
function click(e) {
    ringCursor.style.transform +=
        "translate(-50%, -50%) scale(0.5)";
    setTimeout(() => {
        ringCursor.style.transform = ringCursor.style.transform.replace(
            "translate(-50%, -50%) scale(0.5)",
            ""
        );
    }, 45);
}
/*Función para links*/
itemGrow.forEach((link) => {
    link.addEventListener("mouseover", () => {
        ringCursor.classList.add("hover-grow");
        circleCursor.classList.add("hover-grow");
    });
    link.addEventListener("mouseleave", () => {
        ringCursor.classList.remove("hover-grow");
        circleCursor.classList.remove("hover-grow");
    });
});

