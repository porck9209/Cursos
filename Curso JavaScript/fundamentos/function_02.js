//armazenando uma funçao em uma varialvel

const imprimirSoma = function(a, b){
    console.log(a+ b)
}
imprimirSoma(2, 3)

//armazenando uma função arrow em uma variável

const soma = (a,b = 0) =>{
    return a + b
}
console.log(soma(5, 8))

//retorno implicito

const subtracao = (a, b) => a-b
console.log(subtracao(5, 8))