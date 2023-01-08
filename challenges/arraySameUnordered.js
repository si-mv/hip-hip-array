/**
 * Returns a map - map.get(x) is the number of occurences of x in arr
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map
 * @param {number[]} arr 
 * @returns {Map}
 */
function getCount (arr) {
  const map = new Map()

  for (let x of arr) {
    map.set(x, 1 + map.get(x) || 0)
  }

  return map
}

/**
 * Return true if the arrays contain the same elements in any order, else false
 * e.g. ([1, 2], [1, 2]) => true
 * e.g. ([1, 2], [2, 1]) => true
 * e.g. ([1,2], [2,3]) => false
 * @param {number[]} arr1 
 * @param {number[]} arr2
 * @returns {boolean}
 */
function arraySameUnordered (arr1, arr2) {
  const m1 = getCount(arr1)
  const m2 = getCount(arr2)

  // fail-fast loop
  for (let x of arr1) {
    if (m1.get(x) !== m2.get(x)) return false
  }

  return true
}

module.exports = { arraySameUnordered }
