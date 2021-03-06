/**
 * Escreva uma função pad(text, size, character) que retorna um texto
 * no tamanho especiﬁcado quando ele for menor, usando o caracter
 * especiﬁcado como complemento. Se nada for passado, use um espaço.
 */

function pad(text, size, character) {
  var string = '';

  if (!character) {
    character = ' ';
  }

  for (var i = 0; i < size; i++) {
    if (i < text.length) {
      string += text[i];
    } else {
      string += character;
    }
  }

  return string;
}
