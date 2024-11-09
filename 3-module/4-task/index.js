function showSalary(users, age) {
  let string = users
    .filter((item) => item.age <= age)
    .map((item) => `${item.name}, ${item.balance}\n`)
    .join('');
    return string.slice(0, string.length-1)
}
