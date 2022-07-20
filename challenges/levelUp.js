/**
 * Multiply each element in the array by its position, and then return the sum of the array
 * e.g. ([2, 5, 7, 1]) => 0*2 + 1*5 + 2*7 + 1*3 = 22
 * @param {number[]} arr
 * @returns {number}
 */

function levelUp (arr) {
  return arr.reduce((S, x, i) => S += x * i, 0)
}

module.exports = { levelUp }
