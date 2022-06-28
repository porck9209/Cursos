function SacarDinheiro (ValorSaque){
    let Valor100 = 0
    let Valor50 = 0
    let Valor10 = 0
    let Valor5 = 0
    let Valor1 = 0
    let ValorNota = calcularValorNota(ValorSaque)

    while(ValorSaque >= ValorNota){
        switch(ValorNota){
            case 100:
                ValorSaque -= 100
                Valor100++
                break
            case 50:
                ValorSaque -= 50
                Valor50++
                break
            case 10:
                ValorSaque -= 10
                Valor10++
                break
            case 5:
                ValorSaque -= 5
                Valor5++
                break
            case 1:
                ValorSaque -= 1
                Valor1++
                break
    }
    ValorNota = calcularValorNota(ValorSaque)

    }
    return elaboreResultado(Valor100, Valor50, Valor10, Valor5, Valor1)
}

function calcularValorNota(ValorSaque){
    if(ValorSaque >= 100){
        return 100


    }else if (ValorSaque >= 50) {
        return 50


    }else if (ValorSaque >= 10) {
        return 10


    }else if (ValorSaque >= 5) {
        return 5


    }else if (ValorSaque >= 1) {
        return 1
    }
}


function elaboreResultado (Valor100, Valor50, Valor10, Valor5, Valor1){
    let resultado = ``


    if (Valor100 > 0) {
        resultado += `${Valor100} Nota(s) de R$ 100.`


    }if (Valor50 > 0) {
        resultado += `${Valor50} Notas(s) de R$ 50.`


    }if (Valor10 > 0) {
        resultado += `${Valor10} Nota(s) de R$ 10.`


    }if (Valor5 > 0) {
        resultado += `${Valor5} Nota(s) de R$ 5.`


    }if (Valor1 > 0) {
        resultado += `${Valor1} Nota(s) de R$ 1.`

    }
    return console.log(resultado)
}

SacarDinheiro(153)
SacarDinheiro(567)
SacarDinheiro(999)