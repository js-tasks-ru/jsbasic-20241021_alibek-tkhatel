function makeFriendsList(friends) {
  let list = document.createElement('ul'); //создаем шаблон списка
  for (let elem of friends) { //циклом итерируем массив объектов
    let listElement = document.createElement('li'); //на каждой итерации создаем элемент списка
    listElement.innerHTML = `${elem.firstName} ${elem.lastName}`; //и вкладываем в него имя и фамилию юзера
    list.append(listElement); //затем добавляем в список наш элемент
  }
  return list; //возвращаем готовый DOM- элемент
}
