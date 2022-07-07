const pai = {nome: "pedro", corCabelo: "preto",}

const filha1 = Object.Create(pai)
filha1.nome = "ana"
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: "bia", writable: false, enumerable:true,
})

console.log(filha2.nome)
filha2.nome = "cleiton"
console.log(`${filha2.nome} e tem cabelo da cor ${filha2.corCabelo}`)