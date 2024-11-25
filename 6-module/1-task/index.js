/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  elem = null;
  rows = [];
  constructor(rows) {
    this.rows = rows || this.rows;
    this.#render();
  }

  #template() {
    return `
    <table> <thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead><tbody>
    ${this.rows
      .map(
        (item) =>
          `<tr class= 'table-row'><td>${item.name}</td><td>${item.age}</td><td>${item.salary}</td><td>${item.city}</td><td><button data-remove = true>X</button></td></tr>`,
      )
      .join('\n')}
    </tbody></table>`;
  }

  #onRowRemove = () => {
    const event = new CustomEvent('remove-row', {
      bubbles: true,
    });
  };

  #render() {
    this.elem = createElement(this.#template());

    this.elem.addEventListener('click', ({ target }) => {
      if (target.dataset.remove !== 'true') {
        return;
      }
      const row = target.closest('.table-row');
      if (!row) {
        return;
      }
      row.remove();
    });
  }
}

function createElement(html) {
  const temp = document.createElement('div');
  temp.innerHTML = html;
  return temp.firstElementChild;
}
