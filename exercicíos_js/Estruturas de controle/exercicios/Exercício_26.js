function Pares (valor = 0) {
    if (valor % 2 == 0){
        return console.log(`este numero e par ${valor}`)
    }else{
         console.log(`este numero e impar ${valor}`)
    }
}

let vezes = 0

while(vezes < 100){
    vezes++
    Pares(vezes)
}

