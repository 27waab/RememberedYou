const addBtn = document.getElementById("addBtn"), items = document.querySelector(".items"), ovarlay = document.querySelector(".overlay");

addBtn.onclick = () => {
    addBtn.classList.toggle("open");
    items.classList.toggle("open");
    ovarlay.classList.toggle("open");
}