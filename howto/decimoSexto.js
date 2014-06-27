// Escreva uma função select(array, filter) que retorna
// um array contendo todos os itens de acordo com o
// resultado da função passada como filtro. Se o filtro
// não for uma função, lança uma exceção.

function select(array, filter) {
  try {
    return array.filter(filter);
  } catch (erro) {
    console.log("Erro %s", erro);
  }
}
