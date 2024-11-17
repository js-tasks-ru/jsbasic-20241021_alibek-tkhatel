function hideSelf() {
  let button = document.querySelector('.hide-self-button'); //находим элемент по классу
  button.addEventListener('click', () => button.setAttribute('hidden', true)); //вешаем обработчик по клику, а функцию кладем задачу добавления атрибута
  setTimeout(() => { //для наглядности добавляем функцию для прежнего отображения элемента
    button.removeAttribute('hidden');
    hideSelf(); //запускаем функцию заново
  }, 2000);
}
