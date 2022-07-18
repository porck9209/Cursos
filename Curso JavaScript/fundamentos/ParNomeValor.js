//ParNome /Valor
const saudacao = 'ola!' //Contexto lexico

function exec() {
    const saudacao = 'falaa aí!' // Contexto lexico
    return saudacao
}
// objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: "Matheus",
    idade: 18,
    peso: "65kg",
    altura: 1.78,
    endereco:{
        logradouro:"rua machado de assis",
        numero: 6038
    }
}
console.log(saudacao)
console.log(exec())
console.log(cliente)