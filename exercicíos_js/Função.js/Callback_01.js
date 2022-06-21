const fabricante =['mercedes', 'audi', 'BMW']

function imprimir(nome, idice){
    console.log(`${idice + 1}, ${nome} `)
}

fabricante.forEach(imprimir)
fabricante.forEach(fabricante => console.log(fabricante)
)