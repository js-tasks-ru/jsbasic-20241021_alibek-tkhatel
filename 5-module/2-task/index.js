function toggleText() {
  let button = document.querySelector('.toggle-text-button'); //находим кнопку
  let text = document.querySelector('#text'); //находим DIV с текстом

  button.addEventListener('click', (event)=> {
    text.hidden = !text.hidden //в процессе чтения учебника нашел более лаконичный вариант
  })

  /* button.addEventListener('click', () => {
    text.hasAttribute('hidden') //проверяем есть ли у элемента указанный атрибут
      ? text.removeAttribute('hidden') //при наличии удаляем
      : text.setAttribute('hidden', true); //в противном случае добавляем
  }); */
}
