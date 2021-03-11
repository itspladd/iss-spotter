const iss = require('./iss');


/* iss.fetchIP( (err, ip) => {
  if(err) {
    console.log(err);
    return;
  } else {
    console.log(ip);
  }
}) */

iss.fetchCoordsByIP( "65.28.83.195", (err, coords) => {
  console.log(err);
  console.log(coords);
});