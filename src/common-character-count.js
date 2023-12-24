const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const charCounts1 = new Map();
  for (const char of s1) {
    charCounts1.set(char, (charCounts1.get(char) || 0) + 1);
  }

  let commonCount = 0;
  for (const char of s2) {
    const countInS1 = charCounts1.get(char);
    if (countInS1 !== undefined && countInS1 > 0) {
      commonCount++;
      charCounts1.set(char, countInS1 - 1);
    }
  }

  return commonCount;
}

module.exports = {
  getCommonCharacterCount
};
