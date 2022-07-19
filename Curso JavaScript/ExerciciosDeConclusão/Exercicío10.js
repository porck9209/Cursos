function filtrarNUM (Array){
    const Recebidos = []
    for(let item of Array){
        if(typeof item === "number"){
            Recebidos.push(item)
        }
    }
    return console.log(Recebidos)
}
filtrarNUM([1, "kasd", 2, 3, "qqw",'dfs'])