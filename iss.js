const request = require('request');

const handleStatusCode = (code, action, body) => {
  return Error(`Status code ${code} when ${action}. Response was: ${body}`)
};

//Returns IP as a string to the given callback function.
const fetchIP = (callback) => {
  request.get('https://api.ipify.org/?format=json', (err, response, body) => {
    // If error, print it out
    if (err) {
      callback(err, null);
    } else if (response.statusCode !== 200) {
      // If there was a non-success response code, log it and throw an error
      const responseCodeError = handleStatusCode(response.statusCode, "fetching IP", body);
      callback(responseCodeError, null);
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
      const responseCodeError = handleStatusCode(response.statusCode, "fetching coordinates", body);
      callback(responseCodeError, null);
    } else {
      //Otherwise we should have coordinates! We only want lat and long.
      const results = JSON.parse(body);
      const latitude = results.latitude;
      const longitude = results.longitude;
      callback(null, { latitude, longitude });
    }
  });
};

const fetchISSFlyoverTimes = (location, callback) => {
  request.get(`http://api.open-notify.org/iss-pass.json?lat=${location.latitude}&lon=${location.longitude}`, (err, response, body) => {
    if (err) {
      callback(err, null);
    } else if (response.statusCode !== 200) {
      const responseCodeError = handleStatusCode(response.statusCode, "fetching ISS passes", body);
      callback(responseCodeError, null);
    } else {
      callback(null, body);
    }
  });
};

module.exports = {
  fetchIP,
  fetchCoordsByIP,
  fetchISSFlyoverTimes,
};
