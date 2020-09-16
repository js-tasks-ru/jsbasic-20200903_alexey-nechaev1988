/**
 * showSalary
 * @param {Array} users - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(users, age) {
  // ваш код...
  return users.filter( userObj => userObj.age <= age )
  .map( userObj => userObj.name + ', ' + userObj.balance )
  .join('\n');
}
