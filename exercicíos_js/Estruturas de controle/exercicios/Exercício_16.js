function calculadora (valor1 = 0, op , valor2 = 0 ){
    switch (op){
        case "+":
            return console.log(valor1 + valor2)
            break
        case "-":
            return console.log(valor1 - valor2)
            break
        case "*":
            return console.log(valor1 * valor2)
            break
        case "/":
            return console.log(valor1 / valor2)
            break
        default:
            console.log("operação inválida!! Error: 404")
    }
}
calculadora(2, "+", 5)
calculadora(2, "-", 5)
calculadora(2, "*", 5)
calculadora(2, "/", 5)
calculadora(2, "?", 5)