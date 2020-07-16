var express = require('express');
var app = express();
const zipRouter = require('./routes/zipRouter');

app.use('/', zipRouter);

app.listen(3000, process.env.PORT, function () {
  console.log('Server is up...');
});
