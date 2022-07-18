function carro(velocidademax = 300, delta = 5){
    let velocidadeAtual = 0


this.acelerar = function(){
    if(velocidadeAtual + delta <= velocidademax){
        velocidadeAtual += delta
    }else{velocidadeAtual = velocidademax
    }
}
    this.getvelocidadeAtual = function () {
        return velocidadeAtual
    }
}

const uno = new carro
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrariSf90 = new carro(340, 100)
ferrariSf90.acelerar()
ferrariSf90.acelerar()
ferrariSf90.acelerar()
ferrariSf90.acelerar()
console.log(ferrariSf90.getvelocidadeAtual())

const fordGT47 = new carro(472.5, 60)
fordGT47.acelerar()
fordGT47.acelerar()
fordGT47.acelerar()
fordGT47.acelerar()
fordGT47.acelerar()
console.log(fordGT47.getvelocidadeAtual())