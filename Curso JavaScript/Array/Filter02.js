Array.prototype.filter2 = function(CallBack){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(CallBack(this[i]. i, Array)){
            newArray.push(this[i])
        }
    }
}



const produto = [
    {nome: "notebook",preco: 2499, fragil: true},
    {nome: "Ipad Pro",preco: 1499, fragil: true},
    {nome: "taça de vidro",preco: 12.49, fragil: true},
]


const caro = produto => produto.preco > 500 
const fragil = produto => produto.fragil

console.log(produto.filter2(caro).filter2(fragil))