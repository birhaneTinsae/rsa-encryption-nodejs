const RSAUtils =require('./RSAUtils');

const { publicKey, privateKey }=RSAUtils.keys;

const encryptedData=RSAUtils.encrypt(publicKey,JSON.stringify({ 
    "appId":"qwertyuioplkjhgfdsazxcnmmmm",      
    "timestamp":"2021-05-31 23:14:35", 
    "nonce":"ER33419df678o8bb",      
    "returnUrl":"https://mmpay.trade.pay/T0533111222S001114129", 
    "notifyUrl":"https://mmpay.trade.pay/notifyUrl/T0533111222S001114129", 
    "subject":"Mopping vacuum cleaner", 
    "tradeNo":"T0533111222S001114129", 
    "timeoutExpress":"30", 
    "totalAmount":"9.00", 
    "shortCode":"8000001", 
    "receiveName":"HomeD" 
    }))

console.log(publicKey);
console.log(encryptedData)