var express = require('express');
var app = express();

app.get('/current-sum', function (req, res) {
  res.send('330');
});

app.listen(3050, function () {
  console.log('Example app listening on port 3050!');
});
