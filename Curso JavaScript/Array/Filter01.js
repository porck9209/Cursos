const produto = [
    {nome: "notebook",preco: 2499, fragil: true},
    {nome: "Ipad Pro",preco: 1499, fragil: true},
    {nome: "taça de vidro",preco: 12.49, fragil: true}
]


console.log(produto.filter(function(p){
    return p.preco < 2300

}))

const caro = produto => produto.preco >= 500 
const fragil = produto => produto.fragil

console.log(produto.filter(caro).filter(fragil))