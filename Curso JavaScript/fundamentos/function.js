function imprimirSoma(a, b){
    console.log(a + b)
}
imprimirSoma(100, 5)
imprimirSoma(100)
imprimirSoma(2, 5, 6, 7)

function soma(a, b = 0){
    return a + b
}
console.log(soma(2, 3))
