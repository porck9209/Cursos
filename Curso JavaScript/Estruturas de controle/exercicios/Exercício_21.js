function plano (idade) {
    let ValorConvenio = 100
    if (idade < 10 ) {
        ValorConvenio += 80
    }else if (idade > 10 && idade < 30) {
        ValorConvenio += 50
    }else if (idade > 30 && idade < 60) {
        ValorConvenio += 95
    }else if (idade > 60) {
        ValorConvenio += 130
    }else{
        return console.log("Idade Inválida!!! ")
    }
    return console.log(`O valor da sua Fatura é R$${ValorConvenio}.`)
}

plano(8)
plano(25)
plano(32)
plano(54)
plano(77)
plano("x")