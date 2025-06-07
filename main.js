const addBtn = document.getElementById("addBtn"), items = document.querySelector(".items"), ovarlay = document.querySelector(".overlay");
const newQuitBtn = document.getElementById("newQuit"), content = document.getElementById("sectionOfContent");
const newQuit = document.getElementById("newQuit"), btn_close = document.querySelector(".btn-close"), module = document.querySelector(".moduleOfNewItems");
let arr = [];

addBtn.onclick = () => {
    addBtn.classList.toggle("open");
    items.classList.toggle("open");
    ovarlay.classList.toggle("open");
}
newQuit.onclick = () => {
    addBtn.classList.toggle("open");
    module.classList.toggle("open");
    items.classList.toggle("open");
}
btn_close.onclick = () => {
    module.classList.toggle("open");
    ovarlay.classList.toggle("open");
}
