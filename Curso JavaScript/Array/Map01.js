const num = [1, 2, 3, 4, 5]

let resultado = num.map(function (elem){
    return elem * 2
})
console.log(num, resultado)

let res01 = num.map( elem => elem * 10)
console.log(res01)


const triplo = elem => elem * 3
const soma10 = elem => elem + 10
const ParaDinheiro = elem => `R$${parseFloat(elem).toFixed(2).replace('.',',')}`

resultado = num.map(soma10).map(triplo).map(ParaDinheiro)
console.log(resultado)