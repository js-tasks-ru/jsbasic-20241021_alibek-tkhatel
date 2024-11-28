import createElement from '../../assets/lib/create-element.js';
export default class ProductCard {
  elem = null; //задаем свойство по умолчанию
  constructor({ name, price, category, image, id }) {
    //создаем шаблон нашего объекта
    this.name = name;
    this.price = price;
    this.category = category;
    this.image = image;
    this.id = id;
    this.render(); //запускаем функцию отрисовки
  }

  //функция создания шаблона верстки
  template() {
    return `
    <div class = 'card'>
      <div class = 'card__top'>
        <img src = '/assets/images/products/${
          this.image //дописываем путь до картинки из свойства image
        }' class="card__image" alt="product">
        <span class="card__price">€${this.price.toFixed(2)} </span>
      </div>
      <div class="card__body">
        <div class="card__title">${this.name}</div>
        <button type="button" class="card__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
        </button>
    </div>
    </div>
    `;
  }
  onProductAdd = () => {
    //создаем пользовательское событие
    const event = new CustomEvent('product-add', {
      detail: this.id, //передаем в detail идентификатор объекта
      bubbles: true, //настраиваем всплытие
    });
    this.elem.dispatchEvent(event); //вешаем событие на элемент
  };

  render() {
    this.elem = createElement(this.template()); //прогоняем через функцию создания DOM элемента результат создания шаблона
    this.elem.addEventListener('click', this.onProductAdd); //подписываемся на событие клика по карточке
  }
}
