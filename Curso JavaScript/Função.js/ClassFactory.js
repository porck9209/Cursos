class pessoa {
    constructor(nome) {
        this.nome = nome
    }
    falar(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa("joão")
p1.falar()

const CriarPessoa = nome => {
    return{
        falar: () => console.log(`Meu Nome é ${nome}`)
    }
}
const p2 = CriarPessoa("Carlos")
p2.falar() 