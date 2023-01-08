/**
 * Return an array of words in the input array which are bigger than or equal to
 * the average word length for the array
 * e.g. (['i', 'am', 'soo', 'hungry']) => ['soo', 'hungry']
 * @param {string[]} words
 * @returns {string[]}
 */

function bigWords (words) {
  const average = words.reduce((sum, word) => sum += word.length, 0) / words.length
  return words.filter(word => word.length >= average)
}

module.exports = { bigWords }
