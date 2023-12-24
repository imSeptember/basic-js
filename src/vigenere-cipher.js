const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  transformMessage(message, key, encrypt = true) {
    if (!message || !key) {
      throw new Error("Message and key are required");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();
    const result = [];
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const char = message[i];

      if (this.alphabet.includes(char)) {
        const messageCharCode = char.charCodeAt(0);
        const keyCharCode = key[keyIndex % key.length].charCodeAt(0);
        let transformedCharCode;

        if (encrypt) {
          transformedCharCode = (messageCharCode + keyCharCode) % 26;
        } else {
          transformedCharCode = (messageCharCode - keyCharCode + 26) % 26;
        }

        const transformedChar = String.fromCharCode(transformedCharCode + 65);
        result.push(transformedChar);
        keyIndex++;
      } else {
        result.push(char);
      }
    }

    return this.isDirect ? result.join("") : result.reverse().join("");
  }

  encrypt(message, key) {
    return this.transformMessage(message, key, true);
  }

  decrypt(message, key) {
    return this.transformMessage(message, key, false);
  }
}

module.exports = {
  VigenereCipheringMachine
};
