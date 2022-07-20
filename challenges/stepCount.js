/**
 * Return the number of continguous, increasing subsequences in the given array.
 * e.g. [2, 5, 9, 7, 1, 3, 4, 6, 1, 0, 1] -> 10
 * where the increasing subsequences are [2, 5], [5, 9], [2, 5, 9], [1, 3], [3, 4],
 * [4, 6], [1, 3, 4], [3, 4, 6], [1, 3, 4, 6], [0, 1]
 * @param {number[]} arr 
 * @returns {number}
 */

function stepCount (arr) {
  if (arr.length < 2) return 0

  let i = 0
  const L = []

  for (let j = 1; j < arr.length; j += 1) {
    if (arr[j] <= arr[j-1]) {
      L.push(j - i)
      i = j
    }
  }
  L.push(arr.length - i)

  return L.reduce((S, n) => S += n * (n - 1) / 2, 0)
}

console.log(stepCount([2, 5, 9, 7, 1, 3, 4, 6, 1, 0, 1]))

module.exports = { stepCount }
