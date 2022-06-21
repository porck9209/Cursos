function soboanoticia(nota){
    if (nota >= 7){
        console.log("vc passou")   
    } else{
        console.log("vc não passou")
    }
}
soboanoticia(8.1)
soboanoticia(5)


function seForVerdadeeufalo(valor) {
    if(valor){
        console.log("verdade...", + valor)
    }
}
seForVerdadeeufalo()
seForVerdadeeufalo(undefined)
seForVerdadeeufalo(null)
seForVerdadeeufalo(NaN)
seForVerdadeeufalo('')
seForVerdadeeufalo(true)
seForVerdadeeufalo(1)
seForVerdadeeufalo([])