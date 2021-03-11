const fetchIP = require('./iss');

fetchIP( (err, ip) => {
  if(err) {
    console.log(err);
    return;
  } else {
    console.log(ip);
  }
})