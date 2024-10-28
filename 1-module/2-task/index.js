/**
 * Эту функцию трогать не нужно
 */
function print(text) {
  console.log(text);
}

/**
 * Эту функцию нужно поменять так,
 * чтобы функция sayHello работала корректно
 */
function isValid(name) {
  if (name === null) return false; //проверка на нажатие кнопки "Отмена"
  let isValidSpaсe = name.trim().includes(' '); //проверка на наличие внутренних пробелов в строке при наличие внешних
  if (isValidSpaсe || name.split() == '' || name.length < 4)
    return false; //проверка на пустую строку и минимальную длину строки
  return true;
}

function sayHello() {
  let userName = prompt('Введите ваше имя');

  if (isValid(userName)) {
    print(`Welcome back, ${userName}!`);
  } else {
    print('Некорректное имя');
  }
}
