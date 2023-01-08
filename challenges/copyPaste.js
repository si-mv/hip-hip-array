/**
 * Return an array that contains el n times
 * e.g. (4, 'hi') => ['hi', 'hi', 'hi', 'hi']
 * @param {number} n 
 * @param {any} el 
 * @returns {any[]}
 */

function copyPaste (n, el) {
  // it is fine to use a loop for this! but here's a neat way:
  return new Array(n).fill(el)
}

module.exports = { copyPaste }
