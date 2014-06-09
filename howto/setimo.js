function letterFrequence(text) {
  var frequence = {};
  for (var i = 0; i < text.length; i++) {
    if (frequence[text[i]] === undefined) frequence[text[i]] = 0;
    frequence[text[i]]++;
  }
  return frequence;
}
