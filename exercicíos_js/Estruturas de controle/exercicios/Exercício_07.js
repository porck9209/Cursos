function Bhaskara(a, b, c = 1){
    if(a == 0 || b == 0 || c == 0 ){
        return console.log("operação impossível de ser realizada!! ")
    }else {
    const valorDelta = (b ** 2) -4 * a * c
    const Xpositivo = - b + Math.sqrt(valorDelta) / (2 * a)
    const Xnegativo = - b - Math.sqrt(valorDelta) / (2 * a)
    return console.log(`o delta é ${valorDelta} x' e ${Xpositivo.toFixed(1)} |x'' e ${Xnegativo.toFixed(1)}`)
    }
}
Bhaskara(3, -5, 12)
