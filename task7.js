let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let oper = document.getElementById("oper")
let but = document.getElementById("but")
let res = document.getElementById("res")

but.addEventListener('click', function(){
    let val1 = Number(num1.value)
    let val2 = Number(num2.value)

    switch (oper.value){
        case "+":
            res.textContent = val1 + val2
            break
        case "-":
            res.textContent = val1 - val2
            break
        case "/":
            if (val2 === 0) {
                res.textContent = "Division by 0!"
            } else {
                res.textContent = val1 / val2
            }
            break
        case "*":
            res.textContent = val1 * val2
            break
        default:
            res.textContent = "Unknown operation"
            break
    }
})
