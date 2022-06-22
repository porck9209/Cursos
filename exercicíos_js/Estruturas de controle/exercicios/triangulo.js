function classTriabgulo (lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        return console.log("triangulo equilatero")
    }else if(lado1 == lado2 || lado1 == lado3 || lado2 == lado3){
        return console.log("triangulo isocelis")
    }else {
        return console.log("traingulo escaleno")
    }
}

console.log(classTriabgulo(2,2,2))
console.log(classTriabgulo(2,3,2))
console.log(classTriabgulo(1,2,3))