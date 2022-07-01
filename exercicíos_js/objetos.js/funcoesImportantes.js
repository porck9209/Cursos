const pessoa = {
    nome: "rebbeca",
    idade: 19,
    peso: 65
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
console.log(Object.entries(pessoa))


Object.entries(pessoa).forEach((chave, valor) => {
    console.log(`${chave} ${valor}`)
})

Object.defineProperty(pessoa, "datadeNascimento"), {
    enumerable: true,
    writable: false,
    value: "01/01/2022"
}

pessoa.datadeNascimento = "01/01/2017"
console.log(pessoa.datadeNascimento)