//Taggedtamplate
function tag(partes, ...Valores) {
    console.log(partes)
    console.log(Valores)
}

const aluno = 'gui'
const situação = 'aprovado'
console.log(tag `${aluno} esta ${situação}.`)