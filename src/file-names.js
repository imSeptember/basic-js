const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const uniqueNames = [];
  const nameCounts = {};

  for (const name of names) {
    let baseName = name;
    let suffix = "";

    let count = 1;
    while (uniqueNames.includes(baseName + suffix)) {
      const match = baseName.match(/\((\d+)\)$/);
      if (match) {
        count = Math.max(count, parseInt(match[1]) + 1);
        baseName = baseName.slice(0, -match[0].length);
      } else {
        count = 2;
      }
      suffix = `(${count - 1})`;
    }

    uniqueNames.push(baseName + suffix);
    nameCounts[baseName] = (nameCounts[baseName] || 0) + 1;
  }

  return uniqueNames;
}

module.exports = {
  renameFiles
};
