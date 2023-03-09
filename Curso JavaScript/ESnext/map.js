const tecnologia = new Map()
tecnologia.set('react', { framework: false })
tecnologia.set('angular', { framework: true })

console.log(tecnologia.react)
console.log(tecnologia.get('react').framework)

const ChaveVariadas = new Map([
    [function() {}, 'Função'],
    [{}, 'Objeto'],
    [123, 'numero']
])

ChaveVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(ChaveVariadas.has(123))
ChaveVariadas.delete(123)
console.log(ChaveVariadas.has(123))
console.log(ChaveVariadas.size)