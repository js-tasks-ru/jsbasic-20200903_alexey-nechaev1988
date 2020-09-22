/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */

function makeFriendsList(friends) {
  // ваш код...
  const ul = document.createElement('ul')

  ul.innerHTML = friends.map( friend => '<li>' + friend.firstName + ' ' + friend.lastName + '</li>')
  .join('')
  
  return ul
}
