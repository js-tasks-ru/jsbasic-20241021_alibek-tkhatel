function makeDiagonalRed(table) {
  for (let i = 0; i < table.rows.length; i++) {
    //проходимся циклом по коллекции строк
    table.rows[i].cells[i].style.backgroundColor = 'red'; // в каждой i-той строке закрашиваем i-тую ячейку
  }
}
