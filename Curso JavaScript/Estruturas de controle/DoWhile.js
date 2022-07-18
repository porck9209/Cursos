function UsarNumeroAlet(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let num = -1

do{
    num = UsarNumeroAlet(-1, 20)
    console.log(`o Numero escolhido foi ${num}`)
}while(num != -1)
console.log("ate a proxima")