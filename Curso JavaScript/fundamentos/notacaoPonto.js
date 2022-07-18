console.log(Math.ceil(6.5))

const obji = [];
obji.nome = 'bola';
obji['bola'] = 'bola2';
console.log(obji.nome);

function Obj(nome) {
    this.nome = nome   
}

const obj2 = new Obj('cadeira')
const obj3 = new Obj('mesa')
console.log(obj2.nome)
console.log(obj3.nome)