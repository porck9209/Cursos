let ComParaComThis = function(param){
    console.log(this == param)
}
ComParaComThis()

const obj = {}
ComParaComThis = ComParaComThis.bind(obj)
