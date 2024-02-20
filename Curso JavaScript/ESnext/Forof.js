for (let letras of 'cod3r') {
    console.log(letras)
}

const assunto = ['Map', 'Set', 'promisse']

for (let i in assunto) {
    console.log(assunto)
}

const assuntomap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['promisse', { abordado: false }]
])

for (let assunto of assuntomap) {
    console.log(assunto)
}

for (let chave of assuntomap.keys()) {
    console.log(chave)
}

for (let valor of assuntomap.values()) {
    console.log(valor)
}

for (let [ch, vl] of assuntomap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}