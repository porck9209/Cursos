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


function CriarFuncionario (nome, salarioBase, faltas) {
    return{
        nome,
        salarioBase,
        faltas,
        getsalario(){
            return (salarioBase / 30) * (38 - faltas)
        }
    }
}

const f1 = CriarFuncionario("clara", 1998, 1)
const f2 = CriarFuncionario("jose", 1598, 8)
console.log(f1.getsalario().toFixed(2), f2.getsalario().toFixed(2))