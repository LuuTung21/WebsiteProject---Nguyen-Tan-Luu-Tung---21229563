const button = document.querySelector(".dropdown_button");
const menu = document.querySelector(".dropdown_menu");
const button2 = document.querySelector("#headingbtn");
const content01 = document.querySelector(".content01");

button.addEventListener("click", () => {
    menu.classList.toggle("hide");
})

window.addEventListener("click", (e) => {
    if (e.target !== button) {
        menu.classList.add("hide");
    }
})

button2.addEventListener("click", (e) => {
    content01.classList.toggle("hide01");
})
