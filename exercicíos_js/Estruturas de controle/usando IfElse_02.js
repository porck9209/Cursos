Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim
}
const imprimirResultdo = function(nota){
    if(nota.entre(9, 10)){
        console.log("QUADRO DE HONRA", + nota)
    }else if(nota.entre(7, 8.99)){
        console.log("APROVADO", + nota)
    }else if(nota.entre(4, 6.99)){
        console.log("RECUPERAÇÃO", +nota)
    }else if(nota.entre(0, 3.99)){
        console.log("REPROVADO", +nota)
    }else{
        console.log("NOTA INVALIDA",+ nota)
    }
}
imprimirResultdo(10)
imprimirResultdo(7)
imprimirResultdo(5)
imprimirResultdo(2)
imprimirResultdo(-1)