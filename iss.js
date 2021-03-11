const request = require('request');

//Returns IP as a string to the given callback function.
const fetchIP = (callback) => {
  request.get('https://api.ipify.org/?format=json', (err, response, body) => {
    if(err) {
      callback(err, null);
    } else {
      callback(null, JSON.parse(body).ip);
    }
  });
}

module.exports = fetchIP;
