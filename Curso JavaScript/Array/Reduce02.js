
const Alunos = [
    {nome: "carlos", nota: 10, bolsista : true},
    {nome: "joão", nota: 7.3, bolsista : true},
    {nome: "lucas", nota: 9.6, bolsista : true},
    {nome: "maria", nota: 4.5, bolsista : true}
]



const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(Alunos.map(a => a.bolsista).reduce(todosBolsistas))


const algunsBolsistas = (resultado, bolsista) => resultado || bolsista
console.log(Alunos.map(a => a.bolsista).reduce(algunsBolsistas))