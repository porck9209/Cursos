const ImprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10:
        case 9:
            console.log("QUANDRO DE HONRA", + nota)
            break
        case 8:
        case 7:
        case 6:
            console.log("VOCÊ PASSOU", + nota)
            break
        case 5:
        case 4:
            console.log("VOCÊ FICOU DE RECUPERÇÃO", + nota)
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log("VOCÊ REPROVOU", + nota)    
            break
        default:
            console.log("NOTA INVALIDA")

    }
        
}

ImprimirResultado(10)
ImprimirResultado(9.8)
ImprimirResultado(8)
ImprimirResultado(7)
ImprimirResultado(4)
ImprimirResultado(2)
ImprimirResultado(-4)