function Quitanda(fruta){
    switch(fruta){
        case "maçã" :
            console.log("Não vedemos esta fruta aqui")
            break
        case "kiwi":
            console.log("estamos com escassez de kiwis")
            break
        case "melancia":   
            console.log("Aqui esta são 3 reais o kilo")     
            break
        default:
            console.log("Não entendi pode repetir?")
    }
}
Quitanda("maçã")
Quitanda("kiwi")
Quitanda("melancia")
Quitanda("pika")
