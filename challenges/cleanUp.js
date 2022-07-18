/**
 * Coerce each element to a number if possible, otherwise remove the element
 * e.g. ([1, '2', 'three', false, [5]]) => [1, 2, 0]
 * @param {any[]} arr 
 * @returns {any[]}
 */
 function cleanUp (arr) {
  return arr.filter(x => !isNaN(x)).map(x => Number(x))
}

module.exports = { cleanUp }
