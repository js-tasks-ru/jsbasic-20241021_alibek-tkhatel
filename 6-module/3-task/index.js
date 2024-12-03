import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  elem = null;
  #slides = [];
  #counterSlide = 0;
  constructor(slides) {
    this.#slides = slides || this.#slides;
    this.#counterSlide = this.#counterSlide;
    this.#render();
  }

  #template() {
    return `
    <div class="carousel">
      <div class="carousel__arrow carousel__arrow_right">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </div>
    <div class="carousel__arrow carousel__arrow_left">
      <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
    </div>
    <div class="carousel__inner">
    ${this.#slides
      .map(
        (item) => `
      <div class="carousel__slide" data-id="${item.id}">
        <img src="/assets/images/carousel/${
          item.image
        }" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${item.price.toFixed(2)}</span>
          <div class="carousel__title">${item.name}></div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>`,
      )
      .join('\n')}
      </div>`;
  }

  #onSlideToggle = ({ target }) => {
    let carousel = this.elem.querySelector('.carousel__inner');
    let carouselArrowLeft = this.elem.querySelector('.carousel__arrow_left');
    let carouselArrowRight = this.elem.querySelector('.carousel__arrow_right');
    if (target.closest('.carousel__arrow_right')) {
      carousel.style.transform = `translateX(-${
        carousel.offsetWidth+carousel.offsetWidth * this.#counterSlide
      }px)`;
      this.#counterSlide++; //меняем счетчик

      this.#counterSlide == this.#slides.length - 1
        ? (carouselArrowRight.style.display = 'none')
        : (carouselArrowLeft.style.display = '');
    }
    if (target.closest('.carousel__arrow_left')) {
      carousel.style.transform = `translateX(${
        carousel.offsetWidth-carousel.offsetWidth * this.#counterSlide
      }px)`;
      this.#counterSlide--;

      this.#counterSlide == 0
        ? (carouselArrowLeft.style.display = 'none')
        : (carouselArrowRight.style.display = '');
    }
  };

  #onProductAdd = ({ target }) => {
    if (target.closest('.carousel__button')) {
      //создаем пользовательское событие
      const event = new CustomEvent('product-add', {
        detail: target.closest('[data-id]').getAttribute('data-id'), //передаем в detail идентификатор объекта
        bubbles: true, //настраиваем всплытие
      });
      this.elem.dispatchEvent(event); //вешаем событие на элемент
    }
  };

  #render() {
    this.elem = createElement(this.#template());
    this.elem.querySelector('.carousel__arrow_left').style.display = 'none';
    this.elem.addEventListener('click', this.#onSlideToggle);
    this.elem.addEventListener('click', this.#onProductAdd);
  }
}
document.body.addEventListener('product-add', ({ detail }) => {
  console.log(detail);
});
