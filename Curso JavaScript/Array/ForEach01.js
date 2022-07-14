const aprovados = ['Ana', 'Bruno', 'Carlos', 'David']

aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome))

const ExibirAprovado = aprovados => console.log(aprovados)
aprovados.forEach(ExibirAprovado)