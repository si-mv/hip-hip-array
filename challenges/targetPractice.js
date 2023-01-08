/**
 * Find the indices of any two numbers in nums which add to the target.
 * If it isn't possible, return false
 * e.g. ([3, 4, 1, 7], 13) => [1,3]
 * @param {number[]} nums 
 * @param {number} target 
 * @returns {number[] | boolean}
 */

function targetPractice (nums, target) {
  
  // a succeed-fast double loop
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = i + 1; j < nums.length; j += 1) {
      if (nums[i] + nums[j] === target) return [i, j]
    }
  }

  return false
}

module.exports = { targetPractice }
