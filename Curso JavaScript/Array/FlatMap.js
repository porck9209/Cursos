const escola = [{
    nome: "Turma M1",
    alunos:[{
        nome:"gustavo",
        nota: 7.5
    }, {
        nome:"maria",
        nota: 6.6
}]},{
    nome: "Turma M2",
    alunos:[{
        nome:"joão",
        nota: 8.9
    }, {
        nome:"Clara",
        nota: 10}]}]

const getNotasAluno = a => a.nota
const getNotasTurma = turma => turma.alunos.map(getNotasAluno)

const nota1 = escola.map(getNotasTurma)
console.log(nota1)

console.log([].concat([ 7.5, 6.6 ], [ 8.9, 10]))

Array.prototype.flatMap = function(Callback) {
    return Array.prototype.concat.apply([], this.map(Callback))
}

const nota2 = escola.flatMap(getNotasTurma)
console.log(nota2)