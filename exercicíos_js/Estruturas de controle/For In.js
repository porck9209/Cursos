const notas = [5.5, 6.5, 7.0, 8.4, 10.0]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome: "ana",
    sobrenome:"silva",
    peso:64,
    idade: 23,
    logradoro:{
        rua:"tufic martin",
        numero: 344
    }

}

for( let atributo in pessoa) {
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

