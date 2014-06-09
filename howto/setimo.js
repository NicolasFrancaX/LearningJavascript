// Crie uma função letterFrequence(text) que retorne um objeto contendo a 
// quantidade de ocorrências de cada caracter presente no texto.

function letterFrequence(text) {
  var frequence = {};
  for (var i = 0; i < text.length; i++) {
    if (frequence[text[i]] === undefined) frequence[text[i]] = 0;
    frequence[text[i]]++;
  }
  return frequence;
}
