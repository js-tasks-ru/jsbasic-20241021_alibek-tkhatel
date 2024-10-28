function ucFirst(str) {
  if (str == '') return str //проверка на пустую строку

  return str[0].toUpperCase() + str.slice(1, str.length) // возвращаем строку верхним регистром первого символа + всю оставшуюся строку
}
