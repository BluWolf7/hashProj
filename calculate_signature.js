const crypto = require('crypto');
const querystring = require('querystring');

// Parse the query string from your URL
const queryParams = {
  MinimumCreateDateTime: '12/04/12',
  MaximumCreateDateTime: '13/04/12',
  MerchantId: 'qdq'
};

// Sort the parameters alphabetically by key
const sortedParams = Object.keys(queryParams)
  .sort()
  .reduce((acc, key) => {
    acc[key] = queryParams[key];
    return acc;
  }, {});

// Create the string to sign
const stringToSign = querystring.stringify(sortedParams);

// Your API key
const key = 'your_api_key_here';

// Calculate signature
const signature = crypto
  .createHmac('sha256', key)
  .update(stringToSign)
  .digest('base64');

console.log('String to sign:', stringToSign);
console.log('Calculated signature:', signature);