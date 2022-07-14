const valor = "global"

function minhafuction (){
    console.log(valor)
}

function exec(){
    const valor = "local"
    minhafuction()
}

exec()