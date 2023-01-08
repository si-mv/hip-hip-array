/**
 * Return an array that contains all the numbers of the original array exactly once
 * Don't change the order of the elements
 * e.g. ([1, 2, 2, 3, 4, 5, 5, 6]) => [1, 2, 3, 4, 5, 6]
 * @param {number[]} arr - the numbers in the array are non-decreasing
 * @returns {number[]}
 */

function unduplicate (arr) {
  // a 'set' in js removes all duplicates
  // we spread this into a new array with the ... operator
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
  return [...new Set(arr)]
}

module.exports = { unduplicate }
