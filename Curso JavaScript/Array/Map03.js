Array.prototype.map2 = function(callBack){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callBack(this[i], i, this))
    }
    return newArray
}






const carrinho = [
    '{"nome": "borracha", "preco": 4.39}',
    '{"nome": "caderno", "preco": 17.55}',
    '{"nome": "kit de lapis", "preco": 60.99}',
    '{"nome": "Caneta", "preco": 2.00}',
]



const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco 

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)
console.log(resultado)