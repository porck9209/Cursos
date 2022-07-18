function cardapio (cod, quant = 1){
    let pedido = 0
    switch(cod){
        case 100:
            pedido = quant * 3.00
            return console.log(`Seu pedido foi feito ${quant} cachorro quente, Total a pagar R$${pedido}`)
            break
        case 200:
            pedido = quant * 4.00    
            return console.log(`Seu pedido foi feito ${quant} Hambúrguer Simples, Total a pagar R$${pedido}`)
            break
        case 300:
            pedido = quant * 5.50
            return console.log(`Seu pedido foi feito ${quant} Cheeseburguer, Total a pagar R$${pedido}`)
            break
        case 400:
            pedido = quant * 7.50
            return console.log(`Seu pedido foi feito ${quant} Bauru, Total a pagar R$${pedido}`)
            break
        case 500:
            pedido = quant * 3.50
            return console.log(`Seu pedido foi feito ${quant} Refrigerante, Total a pagar R$${pedido} `)
            break
        case 600:
            pedido = quant * 2.80
            return console.log(`seu pedido foi feito ${quant} Soco, Total a pagar R$${pedido}`)
            break
        default:
            return console.log("Pedido inválido!!, Realize outro pedido")
    }
}

cardapio(100, 5)
cardapio(200, 5)
cardapio(300, 5)
cardapio(400, 5)
cardapio(500, 5)
cardapio(600, 5)
cardapio(800, 5)