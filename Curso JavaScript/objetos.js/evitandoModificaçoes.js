//object.preventExtencion
const produto = Object.preventExtensions({
    nome:"qualquer",
    preço:9.90,
    tag:"promoção"
})

console.log("Extensível", Object.isExtensible(produto))

produto.nome = "borracha"
produto.descriçã = "ele apaga"
delete produto.tag
console.log(produto)


//object.seal
const pessoa = {nome: "juliana", idade: 35}
Object.seal(pessoa) 
console.log("selado", Object.isSealed(pessoa))
pessoa.sobrenome ="silva"
pessoa.idade = 37
console.log(pessoa)


//object.freeze
