/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  // ваш код...
  let arr = str.split(' ')
  .join()
  .split(',')
  .map(Number)
  .filter( value => !Number.isNaN(value) );
    
 return {
    'min': Math.min(...arr),
    'max': Math.max(...arr)
  };
  
}
