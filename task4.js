function AddLi(){
    var li = document.getElementById("list").appendChild(document.createElement("li"))
    li.textContent = "Element X"
}

function DeleteLi(){
    document.getElementById("list").removeChild(document.getElementById("list").lastChild)
}