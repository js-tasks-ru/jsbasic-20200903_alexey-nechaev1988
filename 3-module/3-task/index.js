/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  // ваш код...
  return str.split('-')
  .map( (item, place) => place == 0 ? item: item.charAt(0).toUpperCase() + item.slice(1) )
  .join('')

}
