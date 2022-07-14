const alunos = [
    {nome: "joão", nota: 7.9},
    {nome: "maria", nota: 9.2}
]
//Imperativo
let Total1 = 0
for(let i = 0;i < alunos.length; i++){
    Total1 += alunos[i].nota
}
console.log(Total1 / alunos.length)

//declarativo
const getNota = aluno => aluno.nota
const soma = (Total, atual) => Total + atual
const total2 = alunos.map(getNota).reduce(soma)
console.log(total2 / alunos.length)