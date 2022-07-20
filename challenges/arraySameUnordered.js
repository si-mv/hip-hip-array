/**
 * Return true if the arrays contain the same elements in any order, else false
 * e.g. ([1, 2], [1, 2]) => true
 * e.g. ([1, 2], [2, 1]) => true
 * e.g. ([1,2], [2,3]) => false
 * @param {(number|string)[]} arr1 
 * @param {(number|string)[]} arr2
 * @returns {boolean}
 */

function getCount (arr) {
  const m = new Map()

  for (let x of arr) {
    count = m.get(x)
    m.set(x, !!m.get(x) + 1)
  }

  return m
}

function arraySameUnordered (arr1, arr2) {
  const m1 = getCount(arr1)
  const m2 = getCount(arr2)

  for (let x of arr1) {
    if (m1.get(x) !== m2.get(x)) return false
  }

  return true
}

module.exports = { arraySameUnordered }
