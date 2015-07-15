var request = require('request');
var moment = require('moment');

function Payload(json) {
  this.name = json.name;
  this.pi = json.pi;
  this.bestNumber = json.best_number;
  this.rightNow = moment(json.right_now);
}

request('http://localhost:9292', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    var json = JSON.parse(body);
    var payload = new Payload(json);
    console.log(payload);
  }
});
