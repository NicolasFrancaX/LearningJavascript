// Escreva uma função titleize(text) que converte cada primeira
// letra de cada palavra em maiúsculas.
//
// titleize("this IS just A tExT"); // This Is Just A Text

function titleize(text) {
  word = text.toLowerCase();
  var words = word.split(" ");
  var title = "";
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i].substring(0, 1).toUpperCase() +
               words[i].substring(1, words[i].length);
    title += words[i] + " ";
  }
  return title;
}
