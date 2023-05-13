let bar = document.querySelector("nav i");
let ul = document.querySelector("nav ul")
let bac = document.querySelector("h3")
bar.onclick = function () {
    ul.style.display = "none "
}

bac.onclick = function () {
    ul.style.display = "flex"
}

