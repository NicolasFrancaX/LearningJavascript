/**
 * Escreva uma função que detecta se o ano fornecido
 * é um ano bissexto ou não. Anos bissextos são divisíveis por
 * 4, mas não por 100, a menos que também sejam por 400
 */

function bissexto(ano) {
  return ano % 4 === 0 && (ano % 100 !== 0
                        || ano % 400 === 0);
}
