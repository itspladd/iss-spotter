const fetchIP = require('./iss');

fetchIP( (err, ip) => {
  if(err) {
    console.log(err);
  } else {
    console.log(ip);
  }
})