class lançamento {
    constructor(nome = "generico", valor = 0 ){
    this.nome = nome
    this.valor = valor
    
    }
}


class cicloFinaceiro {
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lançamentos = []
    }

    addLancamentos(...lançamentos){
        lançamentos.forEach(l => this.lançamentos.push(l))
    }

    sumario(){
        let valorConsolidado = 0
        this.lançamentos.forEach(l =>{
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}


const salario = new lançamento("salario", 45000)
const ContaLuz = new lançamento("contadeLuz", 253)

const contas = new cicloFinaceiro(6, 2018)
contas.addLancamentos(salario, ContaLuz)
console.log(contas.sumario())