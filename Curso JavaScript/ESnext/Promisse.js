function FalarDepoisDe(segundos, frase) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase, "jklashdahdajkhl")
        }, segundos * 1000)
    })
}

FalarDepoisDe(3, "hoje é dia")
    .then((frase) => frase.concat('?!?'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))