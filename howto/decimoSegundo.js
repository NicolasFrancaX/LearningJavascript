function pad(text, size, character) {
  var string = "";
  if (character === undefined) character = " ";
  for (var i = 0; i < size; i++) {
    if (i < text.length) string += text[i];
    else string += character;
  }
  return string;
}
