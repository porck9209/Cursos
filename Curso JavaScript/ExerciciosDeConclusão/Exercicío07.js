function repetidor (item, repitir = 0){
    let res = []

    for(let i = 0 ; i < repitir; i++){
        res.push(item)
    }
    return console.log(res)
}

repetidor( "vacalo",6)
repetidor( 6,3)
repetidor( 7,3)
repetidor( 10,10)
