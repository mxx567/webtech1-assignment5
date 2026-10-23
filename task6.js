let inp = document.getElementById("inp");
let text = document.getElementById("text")
inp.addEventListener("keyup", function() {
    text.textContent = inp.value;
})
