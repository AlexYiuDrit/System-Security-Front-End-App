const CryptoJS = require("crypto-js");
const crypto = require('crypto');
const EncryptRsa = require('encrypt-rsa').default;
const encryptRsa = new EncryptRsa();

const generateAESKey = () => {
    return crypto.randomBytes(32).toString('hex');
}

const encryptMessage = (message, key) => {
  const ciphertext = CryptoJS.AES.encrypt(message, key).toString();
  return ciphertext;
};

const decryptMessage = (ciphertext, key) => {
  const bytes  = CryptoJS.AES.decrypt(ciphertext, key);
  const originalText = bytes.toString(CryptoJS.enc.Utf8);
  return originalText;
};

// Public Private Key
const publicKeyEncrypt = (text, publicKey) => {
    return encryptRsa.encryptStringWithRsaPublicKey({ text, publicKey });
}
const privateKeyDecrypt = (text, privateKey) => {
    return encryptRsa.decryptStringWithRsaPrivateKey({ text, privateKey });
}


// Example usage
// const symmetrickey = generateAESKey();
// const plaintext = "fsdfsdfsdf";
// const ciphertext = encryptMessage(plaintext, symmetrickey);
// console.log("Ciphertext:", ciphertext);
// const decryptedtext = decryptMessage(ciphertext, symmetrickey);
// console.log("Decrypted text:", decryptedtext);

module.exports = { generateAESKey, encryptMessage, decryptMessage, publicKeyEncrypt, privateKeyDecrypt };