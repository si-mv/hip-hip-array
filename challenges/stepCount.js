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

  // this solutions uses two pointers, i and j
  // i is always smaller than j
  let i = 0

  // L is an array of the _lengths_ of the *largest* increasing subsequence starting at i
  const L = []

  // attempt to find largest increasing subsequence starting at i and ending at j
  for (let j = 1; j < arr.length; j += 1) {
    if (arr[j] <= arr[j-1]) {
      // when i -> j fails to be increasing, we found the biggest increasing subsequence starting at i
      // add its length to L and let i now "catch up" with j
      L.push(j - i)
      i = j
    }
  }
  // if i -> arr.length is increasing, the above loop won't capture it! so add it
  L.push(arr.length - i)

  // this uses a cool bit of maths: https://t.ly/n-H0
  return L.reduce((S, n) => S += n * (n - 1) / 2, 0)
}

console.log(stepCount([2, 5, 9, 7, 1, 3, 4, 6, 1, 0, 1]))

module.exports = { stepCount }
