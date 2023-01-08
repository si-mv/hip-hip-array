/**
 * Return true if the arrays contain the same elements in the same order, else false
 * e.g. ([1, 2], [1, 2]) => true
 * e.g. ([1, 2], [2, 1]) => false
 * e.g. ([1,2], [2,3]) => false
 * @param {number[]} arr1 
 * @param {number[]} arr2
 * @returns {any[]}
 */

function arraySameOrdered (arr1, arr2) {
  const m = arr1.length
  const n = arr2.length

  if (m !== n) return false

  // fail-fast loop
  for (let i = 0; i < m; i += 1) {
    if (arr1[i] !== arr2[i]) return false
  }

  return true
}

module.exports = { arraySameOrdered }
