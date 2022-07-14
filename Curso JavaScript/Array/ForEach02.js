Array.prototype.forEach2 = function(CallBack){
    for(let i = 0;i < this.length; i++){
        CallBack(this[i], i, this)
    }
}


const aprovados = ['Ana', 'Bruno', 'Carlos', 'David']

aprovados.forEach2(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`)
})