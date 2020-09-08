/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let strUpperCase = str.toUpperCase();
  return strUpperCase.includes('1XBET') || strUpperCase.includes('XXX');
}
