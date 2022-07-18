const Alunos = [
{nome: "carlos", nota: 10, bolsista : true},
{nome: "joão", nota: 7.3, bolsista : false},
{nome: "lucas", nota: 9.6, bolsista : true},
{nome: "maria", nota: 4.5, bolsista : false}
]


console.log(Alunos.map(a => a.nota))
const resultados = Alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual

}, 0)

console.log(resultados)