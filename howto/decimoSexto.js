// Escreva uma função select(array, filter) que retorna
// um array contendo todos os itens de acordo com o
// resultado da função passada como filtro. Se o filtro
// não for uma função, lança uma exceção.

function select(array, filter) {
  try {
    list = [];
    for (var i = 0; i < array.length; i++) {
      if (filter(array[i])) {
        list.push(array[i]);
      }
    }
    return list;
  } catch (erro) {
    console.log("Erro %s", erro);
  }
}
