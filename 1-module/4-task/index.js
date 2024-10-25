function checkSpam(str) {
  let chekOf1Xbet = str.toLowerCase().includes('1xbet'); //что бы игнорировать регистр и его комбинации просто приводим все к нижнему и ищем подстроку 1xbet
  let chekOfXXX = str.toLowerCase().includes('xxx'); //и подстроку xxx

  if (chekOf1Xbet || chekOfXXX) { // при любом совпадении выводим true
    return true;
  }
  return false;
}
