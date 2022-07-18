function SoNumeros(array) {
    const SN = []

    for (let item of array) {

        if (typeof item === "number") {
            SN.push(item)
        }

    }
    return console.log(SN)

}


SoNumeros([1, 2, "Maria", 3, "Clara", 4, "Matheus", 5, 6, "Esteves", 7, ])