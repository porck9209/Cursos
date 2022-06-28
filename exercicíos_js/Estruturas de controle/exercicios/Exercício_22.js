function PagarAnuidade (data, valor) {
    
    var ValorFinal = ``
    let ValorApagar = ValorFinal + valor
    
    switch(data) {
        
        case 1:
            ValorFinal = valor * 0.05
            return console.log(`valor a pagar R$${ValorApagar} + R$${ValorFinal}`)
            break
        case 2:
            ValorFinal = valor * 0.10
            return console.log(`valor a pagar R$${ValorApagar} De anuidade ${ValorFinal}`)
            break
        case 3:
            ValorFinal = valor * 0.15
            return console.log(`valor a pagar R$${ValorApagar} De anuidade ${ValorFinal}`)
            break
        case 4:
            ValorFinal = valor * 0.20
            return console.log(`valor a pagar R$${ValorApagar} De anuidade ${ValorFinal}`)
            break
        case 5:
            ValorFinal = valor * 0.25
            return console.log(`valor a pagar R$${ValorApagar} De anuidade ${ValorFinal}`)
            break
        case 6:
            ValorFinal = valor * 0.30
            return console.log(`valor a pagar R$${ValorApagar} De anuidade ${ValorFinal}`)
            break
        case 7:
            ValorFinal = valor * 0.35
            return console.log(`valor a pagar R$${ValorApagar} De anuidade ${ValorFinal}`)
            break
        case 8:
            ValorFinal = valor * 0.40
            return console.log(`valor a pagar R$${ValorApagar} De anuidade ${ValorFinal}`)
            break
        case 9:
            ValorFinal = valor * 0.45
            return console.log(`valor a pagar R$${ValorApagar} De anuidade ${ValorFinal}`)
            break
        case 10:
            ValorFinal = valor * 0.50
            return console.log(`valor a pagar R$${ValorApagar} De anuidade ${ValorFinal}`)
            break
        case 11:
            ValorFinal = valor * 0.55
            return console.log(`valor a pagar R$${ValorApagar} De anuidade ${ValorFinal}`)
            break
        case 12:
            ValorFinal = valor * 0.60
            return console.log(`valor a pagar R$${ValorApagar} De anuidade ${ValorFinal}`)
            break
        default:
            return console.log("Error 101: Data Inváilda!!!")
            
    }
}

PagarAnuidade(1, 500)
PagarAnuidade(2, 500)
PagarAnuidade(3, 500)
PagarAnuidade(4, 500)
PagarAnuidade(5, 500)
PagarAnuidade(6, 500)
PagarAnuidade(7, 500)
PagarAnuidade(8, 500)
PagarAnuidade(9, 500)
PagarAnuidade(10, 500)
PagarAnuidade(11, 500)
PagarAnuidade(12, 500)