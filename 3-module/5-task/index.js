function getMinMax(str) {
  let arrayNumbers = str
    .split(' ')
    .filter((item) => !isNaN(item))
    .sort((a, b) => a - b);
  return {
    min: Number(arrayNumbers[0]),
    max: Number(arrayNumbers[arrayNumbers.length - 1]),
  };
}
