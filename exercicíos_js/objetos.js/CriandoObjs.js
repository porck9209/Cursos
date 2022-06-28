const obj1 = {}



function Produto (nome, preco, desc){
    this.nome = nome
    this.getPrecocomDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto("azuleijo", 24, 0.15 )
const p2 = new Produto("camisa", 60, 0.20 )
console.log(p1.getPrecocomDesconto(),p2.getPrecocomDesconto())
