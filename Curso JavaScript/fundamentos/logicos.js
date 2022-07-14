function compras(trabalho1 ,trabalho2){
    const comprarsorvete = trabalho1 || trabalho2
    const comprarTv50p = trabalho1 && trabalho2
    //const comprarTv32p = !!(trabalho1 ^ trabalho2)
    const comprarTv32p = trabalho1 != trabalho2
    const mantersaudavel = !comprarsorvete

    return{ comprarsorvete, comprarTv50p, comprarTv32p, mantersaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, false))