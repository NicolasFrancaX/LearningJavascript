function first(array, filter) {
  for (var i = 0; i < array.length; i++)
    if (filter(array[i])) return array[i];
}
