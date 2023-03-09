//Não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('São paulo')
times.add('Flamengo')
times.add('Grêmio')
times.add('vasco')

console.log(times)
console.log(times.size)
console.log(times.has('vasco'))
console.log(times.has('vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))