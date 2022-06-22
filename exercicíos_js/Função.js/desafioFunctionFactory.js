function pessoa(nome){
    this.nome = nome
    this.falar = function(){
        console.log(`Meu nome é ${nome}, Otário!!`)
    }
}
const p1 = new pessoa('Welington')
p1.falar()