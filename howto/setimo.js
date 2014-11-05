/**
 * Crie uma função letterFrequence(text) que retorne um objeto contendo a
 * quantidade de ocorrências de cada caracter presente no texto.
 */

function letterFrequence(text) {
  var frequence = {};
  
  text.split('').map(function(letter) {
    !frequence[letter] ? frequence[letter] = 1 : frequence[letter] += 1;
  });

  return frequence;
}
