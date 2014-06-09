function reverse(text) {
  var reversing = "";
  for (var i = 0; i < text.length; i++) {
    reversing = text[i] + reversing;
  }
  return reversing;
}
