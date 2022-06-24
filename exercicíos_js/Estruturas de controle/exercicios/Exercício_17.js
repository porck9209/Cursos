function PlanoSalarial (salario, Plano){
    
    switch(Plano){
        case "A":
            salario += salario * 0.10
        return console.log(salario)
        break
        case "B":
            salario += salario * 0.15
            return console.log(salario)
        break
        case "C":
            salario += salario * 0.20
            return console.log(salario)
        break
        default:
            return console.log('Opção inválida!!, Digite outra opção')
    }

}
PlanoSalarial(3000, "A")
PlanoSalarial(1.212, "B")
PlanoSalarial(1.212, "C")
PlanoSalarial(1.212, "D")