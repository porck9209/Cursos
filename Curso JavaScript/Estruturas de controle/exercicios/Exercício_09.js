function SistemadeNotas(nota){
    if(nota < 40 ){
        return console.log("Reprovado!!")
    }else if(nota >= 40 ){
        return console.log("Aprovado!!")
    }
}
SistemadeNotas(40)
SistemadeNotas(60)
SistemadeNotas(39.51)