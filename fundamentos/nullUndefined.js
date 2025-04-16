let valor  // não inicializada
console.log(valor) // undefined

valor = null; // difiniu um valor !

console.log(valor); // ausencia de valor !

// -> console.log(valor.toString()); Erro , não conseguimos acessar um valor de uma variavel quando ela é do tipo undefined ou null.

const produto = {}
produto.preco = 9.50;
console.log(produto)

produto.preço = undefined // evite atribuir undefined
console.log(!!produto.preço)
// tira um produto de um objeto "delete" delete produto.preço
console.log(produto)

// produto.preço = null  -> produto sem preço
