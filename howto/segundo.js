// Altere a função max() para receber qualquer quantidade de 
// argumentos e retornar o maior número dentre eles.

function max() {
  var maximo = arguments[0];
  for (var i = 1; i < arguments.length; i++) {
    maximo = Math.max(maximo, arguments[i]);
  }
  return maximo;
}
