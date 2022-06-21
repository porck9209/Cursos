const imprimirNota = function(nota){
    if(nota > 6){
        console.log("vc foi aprovado com de media", + nota)
    } else{
        console.log("vc foi reprovado com de media", + nota)
    }
}
imprimirNota(8)
imprimirNota(5)