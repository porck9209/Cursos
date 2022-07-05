Object.prototype.atr0 = "Z"
const avo = {atr1: "A"}
const pai = {__proto__: avo, atr2: "B" }
const filho = {__proto__: pai, atr3: "C"}

console.log(filho.atr0)



const carro = {
    velAtual: 0,
    velMAX: 200,
    acelerarMais(delta){
        if (this.velAtual + delta <= this.velMAX){
            this.velAtual += delta
        }else{
            this.velAtual = this.velMAX
        }
    },
    status() {
        return `${this.velAtual}Km/h   ${this.velMAX}Km/h`
    }
}

const ferrari ={
    modelo: "f40",
    velMAX: 340,
}

const volvo = {
    modelo: "v40",
    status() {
        return `${this.modelo}: ${super.status()}`
    }
}


Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())