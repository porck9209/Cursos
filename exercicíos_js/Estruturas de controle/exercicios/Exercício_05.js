function FormatarValorDecimal(valordecimal){
    valorEmreais = `R$ ${valordecimal.toFixed(2).toString().replace(".",",")}`
    console.log(valorEmreais)
}
console.log(FormatarValorDecimal(0.1 + 0.2))