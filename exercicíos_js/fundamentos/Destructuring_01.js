const pessoa = {
    nome: "pedro",
    idade: 17,
    endereco: {
        logradoro: "rua tufic martin",
        numero: 344
    }

}
const {nome, idade } = pessoa
console.log(nome, idade)

const {nome: n, idade: i } = pessoa
console.log(n, i)

const{sobrenome, BemHumorado = true} = pessoa
console.log(sobrenome, BemHumorado)

const{endereco: {logradoro, numero, cep}} = pessoa
console.log(logradoro, numero, cep )