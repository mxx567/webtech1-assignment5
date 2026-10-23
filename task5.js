let box = document.getElementById("box");
let color = box.style.backgroundColor
box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "blue";
})
box.addEventListener("mouseout", function() {
    box.style.backgroundColor = color;
})