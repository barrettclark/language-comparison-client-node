var request = require('request');
var moment = require('moment');

request('http://localhost:9292', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var payload = JSON.parse(body);
    payload.right_now = moment(payload.right_now);
    console.log(payload);
  }
});
