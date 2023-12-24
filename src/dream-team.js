const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  const validNames = [];

  for (const member of members) {
    if (typeof member === "string") {
      const trimmedName = member.trim(); // Handle whitespaces
      if (trimmedName.length > 0) {
        validNames.push(trimmedName[0].toUpperCase()); // Handle lowercase
      }
    } else {
      return false; // Indicate incorrect members (non-string types)
    }
  }

  if (validNames.length === 0) {
    return false; // No valid names provided
  }

  return validNames.sort().join(""); // Sort alphabetically
}

module.exports = {
  createDreamTeam
};
