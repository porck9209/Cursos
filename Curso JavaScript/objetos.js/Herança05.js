console.log(String)
console.log(Array)
console.log(Object)

String.prototype.reverse = function(){
    return this,this.split('').reverse().join('')
}

console.log("Orgia de traveco".reverse())
console.log("Lhama Peaky Blinders".reverse())


Array.prototype.first = function() {
    return this[0]
}

console.log([1,2,3,4,5].first())
console.log(['a','b','c'].first())
