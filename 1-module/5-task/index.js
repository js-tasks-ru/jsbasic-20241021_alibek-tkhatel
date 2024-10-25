function truncate(str, maxlength) {
  if (str.length > maxlength) {
    //проверка на превышение max длины строки
    let newString = `${str.slice(0, maxlength - 1) + '…'}`; //создаем новую строку состоящую из оригинальной строки, но допустимой длины минус 1 символ и конкатенируем с заданным окончанием
    return newString;
  }
  return str; //при допустимой длине строки, возвращаем без изменений
}
