function sumSalary(salaries) {
  let totalSalary = 0; //задаем изначальное значение аккумулятора (при отсутствии зарплат, останется нулем)

  for (let key in salaries) {
    if (
      typeof salaries[key] == 'number' && //отсекаем варианты ТОЛЬКО ЧИСЛО, не равно NaN и варианты с бесконечностью
      !isNaN(salaries[key]) &&
      salaries[key] !== Infinity &&
      salaries[key] !== -Infinity
    ) {
      totalSalary += salaries[key]; //при выполнении условия, складываем итерируемые значения свойств объекта в аккумулятор
    }
  }
  return totalSalary;
}
