var express = require('express');
var app = express();
const url = require('url');
const myURL = url.parse('https://user: pass@sub.example.com :8080/p/a/t/h?query=string#hash');


app.get('/', function (req, res) {
  res.send(JSON.stringify (myURL, 0,2));
});

app.get('/var', function (req, res) {
  res.send('Hello Programer!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
