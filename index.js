const fetchIP = require('./iss');

fetchIP( (err, ip) => {
  console.log(err, ip);
})