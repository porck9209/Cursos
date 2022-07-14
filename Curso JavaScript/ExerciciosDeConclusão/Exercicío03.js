function SalarioFuncionario (horas, valor){
    let valorHoras = horas * 30.00
    let SalarioFinal = valorHoras * valor
    return console.log(`seu salario e de R$${SalarioFinal}`)
}
SalarioFuncionario(8, 10)
SalarioFuncionario(12, 15)
SalarioFuncionario(24, 7)