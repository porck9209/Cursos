function invertido (bol, num){
    if (num < 0 ){
        num -= num * 2
        return console.log(num)
    } else if( num > 0){
        num += ( - num - num) 
        return console.log(num)
    }else {
        return console.log("Apenas valores booleanos ou numericos e esse é do tipo string!!! ")
    }


    let AltBol = !bol
    return console.log(AltBol)
}
invertido(false, -2000)
invertido(false, 2000)
invertido("kjdk", "ksjdajskda")
