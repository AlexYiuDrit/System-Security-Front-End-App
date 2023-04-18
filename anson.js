var CryptoJS = require("crypto-js");
var ciphertext = CryptoJS.AES.encrypt('alicemessage', 'symmetrickey').toString();

console.log(ciphertext)

var bytes  = CryptoJS.AES.decrypt(ciphertext, 'symmetrickey');
var originalText = bytes.toString(CryptoJS.enc.Utf8);

console.log(originalText) 

//
//

const EncryptRsa = require('encrypt-rsa').default;
const encryptRsa = new EncryptRsa();

const { privateKey, publicKey } = encryptRsa.createPrivateAndPublicKeys();

console.log(publicKey)
console.log(privateKey)


const encryptedText = encryptRsa.encryptStringWithRsaPublicKey({ 
  text: 'symmetrickey',
  publicKey,
});

console.log(encryptedText);

const decryptedText = encryptRsa.decryptStringWithRsaPrivateKey({ 
  text: encryptedText, 
  privateKey
});

console.log(decryptedText);