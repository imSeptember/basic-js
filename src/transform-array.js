const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  const transformed = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string" && arr[i].startsWith("--")) {
      const controlSequence = arr[i].slice(2);
      switch (controlSequence) {
        case "double-next":
          transformed.push(arr[i + 1], arr[i + 1]);
          i++;
          break;
        case "discard-prev":
          transformed.pop();
          break;
        default:
          break;
      }
    } else {
      transformed.push(arr[i]);
    }
  }

  return transformed;
}

module.exports = {
  transform
};
