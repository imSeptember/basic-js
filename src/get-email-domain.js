const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const indexOfAt = email.indexOf("@");
  if (indexOfAt === -1) {
    return ""; // Invalid email format
  }

  return email.substring(indexOfAt + 1);
}

module.exports = {
  getEmailDomain
};
