function area (largura, altura){
    const area = largura * altura
    if(area > 20){
    console.log(`Valor acima do permitido! ${area}m2`)
    }else {
        return area
    }   
}

console.log(area(2, 9))
console.log(area(5))
//console.log(area())
//console.log(area({}))
console.log(area("gfgfgf"))
console.log(area(12,2))

