function highlight(table) {
  for (let i = 1; i < table.rows.length; i++) {
    //создаем маркеры условий (доступность\гендер\возраст)
    let statusAvailable = table.rows[i].cells[3];
    let statusGender = table.rows[i].cells[2];
    let statusAge = table.rows[i].cells[1];

    //расписываем условия и результат
    if (statusAvailable.dataset.available == 'true')
      table.rows[i].classList.add('available');
    if (statusAvailable.dataset.available == 'false')
      table.rows[i].classList.add('unavailable');
    if (!statusAvailable.dataset.available)
      table.rows[i].setAttribute('hidden', true);
    statusGender.textContent == 'm'
      ? table.rows[i].classList.add('male')
      : table.rows[i].classList.add('female');
    if (statusAge.textContent < 18) {
      table.rows[i].style.textDecoration = 'line-through';
    }
  }
}
