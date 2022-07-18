const x = "global"

function fora() {
    const x = "local"
    function dentro(){
        return x 
    }
    return dentro
}

const MinhaFunc = fora()
console.log(MinhaFunc())