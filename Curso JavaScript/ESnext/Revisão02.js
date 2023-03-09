//Arrow function

const soma = (a, b) => a + b
console.log(soma(50, 50))

//Arrow function (this)
const lexico = () => console.log(this === exports)
lexico()

//parametros default

function log(texto = 'Node') {
    console.log(texto)
}
log()
log("Sou mais forte")

//Operador rest

function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return console.log(total)
}
total(50, 25, 25)