const peso1 = 65
const peso2 = Number('55')

 console.log(peso1, peso2)
 console.log(Number.isInteger(peso1))
 console.log(Number.isInteger(peso2))

 const avaliacao1 = 9.871
 const avaliacao2 = 6.871

 const total = avaliacao1 * peso1 + avaliacao2 * peso2
 const media = total/ (peso1 + peso2)

 console.log(total)
 console.log(media.toFixed(2))
 console.log(media.toString) // converte Number para string