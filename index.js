const iss = require('./iss');


/* iss.fetchIP( (err, ip) => {
  if(err) {
    console.log(err);
    return;
  } else {
    console.log(ip);
  }
}) */

/* iss.fetchCoordsByIP( "65.28.83.195", (err, coords) => {
  console.log(err);
  console.log(coords);
}); */


iss.fetchISSFlyoverTimes({ latitude: '49.27670', longitude: '-123.13000' }, (err, times) => {
  console.log(err);
  console.log(times);
});