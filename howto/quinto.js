/**
 * Escreva uma função chamada ﬁndLongestWord(words) que retorna a
 * maior palavras baseada na quantidade de caracteres.
 */

function findLongestWord() {
  var largerWord = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    largerWord = largerWord.length <= arguments[i].length ?
                 arguments[i] : largerWord;
  }
  return largerWord;
}
