function ucFirst(str) {
  if (str == '') return str //проверка на пустую строку

  let newString = str[0].toUpperCase() + str.slice(1, str.length) //берем первый символ в верхнем регистре и записываем в новую строку + всю оставшуюся строку
  return newString // возвращаем новую строку
}
