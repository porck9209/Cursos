function JurosS (capitalInicial, TaxasJuros, TempoAplicao){
    return capitalInicial * ( TaxasJuros * TempoAplicao)
}

function JurosC(capitalInicial, TaxasJuros, TempoAplicao){
    return capitalInicial * (1 + TaxasJuros ) ** TempoAplicao
}

console.log(JurosS(1000, 10/100, 2))
console.log(JurosC(1000, 10/100, 2).toFixed(2))
