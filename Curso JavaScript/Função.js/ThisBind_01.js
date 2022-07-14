const pessoa ={
    saudacao: "Bom dia!",
    falar(){
        console.log( this.saudacao)
    }
}
pessoa.falar
const falar = pessoa.falar
falar()

const FalarDePessoa = pessoa.falar.bind(pessoa)
FalarDePessoa()