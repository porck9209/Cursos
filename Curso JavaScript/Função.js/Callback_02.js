const nota = [7.7,6.6,5.2,8.9,3.1,7.1,9.0]

let notasBaixas = []
for(let i in nota){
    if(nota[i] < 7) {
        notasBaixas.push(nota[i])

    }
}
console.log(notasBaixas)

 const notasBaixa2 = nota.filter(function(nota){
    return nota < 7
})
console.log(notasBaixa2)

const notasBaixa3 = nota.filter(nota => nota < 7 )
console.log(notasBaixa3)