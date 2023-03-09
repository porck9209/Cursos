// operador ... rest(Juntar)/ spread(Espalhar)
//usar rest como parametro de função

//usar spread com objeto
const funcionario = { nome: 'maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }

// Usar spread com array
const grupoA = ["joão", "Pedro", "Gloria"]
const GrupoFinal = ["Maria", "Rafaela", "Amanda", ...grupoA]
console.log(GrupoFinal)