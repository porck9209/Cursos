function diaSemana(dia){
    switch(dia){
        case 1:
            console.log("fim de semana")
            break
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            console.log("dia útil")
            break
        case 7: 
            console.log("fim de semana")
            break
        default:
            console.log("dia invalido")
    }
}
diaSemana(1)
diaSemana(4)
diaSemana(7)
diaSemana(2)
diaSemana(3)
diaSemana(9)