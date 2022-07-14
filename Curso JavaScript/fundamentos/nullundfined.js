let valor // não foi definido 
console.log(valor)


valor = null //ausencia de valor
console.log(valor)
//console.log(valor.toString()) // Error

const produto = {}
console.log(produto.preco)
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // Evitar usar Undefined

console.log(!!produto.preco)
console.log(produto)

produto.preco = null
console.log(!!produto.preco)
console.log(produto)