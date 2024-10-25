function factorial(n) {
  let resultFactorial = n; //создаем корзину куда сразу кладем максимальный множитель равный основанию факториала
  if (n !== 0) {  //проверка на НЕ ноль, в противном случае просто возвращаем единицу
    for (let i = 1; i < n; i++) {
      resultFactorial *= (n-i); //в корзину попадает каждый раз произведение изначального значения на все значения меньше
    }
    return resultFactorial;
  } else {
    resultFactorial = 1;
    return resultFactorial;
  }
}
