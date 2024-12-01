import createElement from '../../assets/lib/create-element.js';
export default class UserTable {
  elem = null;
  #rows = [];
  constructor(rows) {
    this.#rows = rows || this.#rows;
    this.#render();
  }

  #template() {
    return `
    <table> <thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead><tbody>
    ${this.#rows
      .map(
        (item) =>
          `<tr class= 'table-row'><td>${item.name}</td><td>${item.age}</td><td>${item.salary}</td><td>${item.city}</td><td><button data-remove = true>X</button></td></tr>`,
      )
      .join('\n')}
    </tbody></table>`;
  }

  #render() {
    this.elem = createElement(this.#template());

    this.elem.addEventListener('click', (event) => {
      if (event.target.dataset.remove !== 'true') {
        return;
      }
      const row = event.target.closest('.table-row');
      if (!row) {
        return;
      }
      row.remove();
      if (this.elem.lastElementChild.children.length == 0) {
        this.elem.remove();
      }
    });
  }
}
