function isEmpty(obj) {
  let arrayProperties = [];
  for (let key in obj) {
    arrayProperties.push(obj[key]);
  }
  return arrayProperties.length == 0;
}
