function newArray (itens){
    const array1 = itens.shift()
    const array2 = itens.pop()

    return console.log([array1, array2])
}

newArray([1, 2, 3])
newArray([5, "hash", 'delta'])
newArray(['matheus','joao','gustavo'])