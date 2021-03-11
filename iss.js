const request = require('request');

//Returns IP as a string to the given callback function.
const fetchIP = (callback) => {
  request.get('https://api.ipify.org/?format=json', (err, response, body) => {
    // If error, print it out
    if (err) {
      callback(err, null);
    } else if (response.statusCode !== 200) {
      // If there was a non-success response code, log it and throw an error
      const msg = `Status code ${response.statusCode} when fetching IP. Response was: ${body}`;
      callback(Error(msg), null);
    } else {
      //Otherwise we should have an IP!
      callback(null, JSON.parse(body).ip);
    }
  });
};

const fetchCoordsByIP = (ip, callback) => {
  request.get(`https://freegeoip.app/json/${ip}`, (err, response, body) => {
    // If error, print it out
    if (err) {
      callback(err, null);
    } else if (response.statusCode !== 200) {
      // If there was a non-success response code, log it and throw an error
      const msg = `Status code ${response.statusCode} when fetching coordinates. Response was: ${body}`;
      callback(Error(msg), null);
    } else {
      //Otherwise we should have coordinates! We only want lat and long.
      callback(null, JSON.parse(body));
    }
  });
};

module.exports = { 
  fetchIP,
  fetchCoordsByIP
};
