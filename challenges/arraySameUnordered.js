/**
 * Return true if the arrays contain the same elements in any order, else false
 * e.g. ([1, 2], [1, 2]) => true
 * e.g. ([1, 2], [2, 1]) => true
 * e.g. ([1,2], [2,3]) => false
 * @param {(number|string)[]} arr1 
 * @param {(number|string)[]} arr2
 * @returns {boolean}
 */

function getCounter (arr) {
  const m = new Map()
  for (let x of arr) {
    count = m.get(x)
    m.set(x, count ? x + 1 : 1)
  }
  return m
}

function arraySameUnordered (arr1, arr2) {
  
  m1 = getCounter(arr1)
  m2 = getCounter(arr2)

  for (let x of m1.keys()) {
    if (m1.get(x) !== m2.get(x)) return false
  }

  return true

}

arraySameUnordered([1,2,3], [1,2,3])

module.exports = { arraySameUnordered }
