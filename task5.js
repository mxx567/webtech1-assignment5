let box = document.getElementById("box");
box.addEventListener("mouseover", function() {
    box.style.backgroundColor = "blue";
})
box.addEventListener("mouseout", function() {
    box.style.backgroundColor = "red";
})