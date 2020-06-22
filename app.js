var express = require('express');
var app = express();

app.listen(3000, process.env.PORT, function () {
  console.log('Server is up...');
});
