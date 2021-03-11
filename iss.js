const request = require('request');

request.get('https://api.ipify.org/?format=json', (err, response, body) => {
  console.log(body);
});