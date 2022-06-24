function ComprarCarro(carro){
    switch(carro){
        case "Hatch":
            return console.log("Compra efetuada com sucesso")
            break
        case "sedans":    
        case "motocicletas":    
        case "camionetes":    
            return console.log("tem certeza que prefere esse modelo")
            break
        default:
            return console.log("Não trabalhamos com este tipo de automóvel aqui")
    }
}

ComprarCarro("Hatch")
ComprarCarro("sedans")
ComprarCarro("camionetes")
ComprarCarro("ford gt 47")