function initCarousel() {
  let carousel = document.querySelector('.carousel__inner');//находим карусель слайдов

  //находим стрелки переключения
  let carouselArrowLeft = document.querySelector('.carousel__arrow_left');
  let carouselArrowRight = document.querySelector('.carousel__arrow_right');

  //находим общего родителя
  let container = document.querySelector('[data-carousel-holder]');

  //задаем начальное отображение левой стрелки
  carouselArrowLeft.style.display = 'none';

  //заводим счетчик слайдов
  let counterSlide = 0;

  //вешаем событие на общего родителя
  container.addEventListener('click', ({ target }) => {
    //если целевой элемент имеет этого родителя
    if (target.closest('.carousel__arrow_right')) {
      //сдвигаем карусель вправо на вычисляемое расстояние
      carousel.style.transform = `translateX(-${carousel.offsetWidth + (carousel.offsetWidth*counterSlide)}px)`;
      counterSlide++; //меняем счетчик

      //при достижении максимального значения скрываем правую стрелку
      counterSlide == 3
        ? (carouselArrowRight.style.display = 'none')
        : (carouselArrowLeft.style.display = '');
    }
    if (target.closest('.carousel__arrow_left')) {
      carousel.style.transform = `translateX(${carousel.offsetWidth - (carousel.offsetWidth*counterSlide)}px)`;
      counterSlide--;

      counterSlide == 0
        ? (carouselArrowLeft.style.display = 'none')
        : (carouselArrowRight.style.display = '');
    }
  });
}
