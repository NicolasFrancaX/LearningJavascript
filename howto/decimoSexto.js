function select(array, filter) {
  try {
    list = [];
    for (var i = 0; i < array.length; i++)
      if (filter(array[i])) list.push(array[i]);
    return list;
  } catch (erro) {
    console.log("Erro %s", erro);
  }
}
