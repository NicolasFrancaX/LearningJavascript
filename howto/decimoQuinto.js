/**
 * Escreva uma função first(array, filter) que retorna
 * o primeiro item de acordo com o resultado da função
 * passada como filtro. Se o filtro não for uma função,
 * retorna o primeior item do array.
 *
 * first([4,3,9,2,10], function(number){
 *   return number > 5;
 * }) => 9
 */

function first(array, filter) {
  for (var i = 0; i < array.length; i++) {
    if (typeof filter !== 'function') {
      return array[0];
    } else if (filter(array[i])) {
      return array[i];
    }
  }
}
