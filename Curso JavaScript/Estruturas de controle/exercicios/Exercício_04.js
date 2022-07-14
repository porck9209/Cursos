function div(dividendo = 0, divisor = 0){
    console.log("resultado é " + Math.floor(dividendo/divisor))
    console.log(`o resto é ${dividendo % divisor}`)
}
console.log(div(10, 2))