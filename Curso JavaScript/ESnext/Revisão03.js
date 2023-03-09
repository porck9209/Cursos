// ES8: Object.value/Object.entries
const ob = { a: 1, b: 2, c: 3 }
console.log(Object.values(ob))
console.log(Object.entries(ob))

//Melhorias na NotaçãoLiteral
const nome = "carla"
const pessoa = {
    nome,
    ola() {
        return ':Oi gente'
    }
}
console.log(pessoa.nome, pessoa.ola())

//Class
class Animal {}
class Cachorro extends Animal {
    falar() {
        return ('Au au!')
    }
}
console.log(new Cachorro().falar())