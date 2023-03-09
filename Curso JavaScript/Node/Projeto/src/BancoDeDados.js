const sequece = {
    _id: 1,
    get id() { return this._id++ }
}

const produto = {}

function SalvarProduto(produto) {
    if (!produto.id) produto.id = sequence.id
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produto[id] || {}
}

function getProdutos() {
    return Object.values(produtos)
}

module.exports = { SalvarProduto, getProduto, getProdutos }