const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

// const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
//     moduleLength: 2048
// });

exports.keys = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048
});


exports.encrypt = (publicKey,data) => {
  var encryptedData=  crypto.publicEncrypt({
        key: publicKey,
        padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
        oaepHash: "sha256",
    }, Buffer.from(data));
    return encryptedData.toString('base64');
}

exports.decrypt=(privateKey,encryptedData)=>{
    var decryptedData=crypto.privateDecrypt({
		key: privateKey,
		// In order to decrypt the data, we need to specify the
		// same hashing function and padding scheme that we used to
		// encrypt the data in the encryption step
		padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
		oaepHash: "sha256",
	},encryptedData);
    return decryptedData.toString();
}