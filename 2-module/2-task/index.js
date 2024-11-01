function isEmpty(obj) {
  let arrayProperties = []
  for (let key in obj) {
    arrayProperties.push(obj[key])
  }
  if (arrayProperties.length == 0) {
    return true
  } return false
}
