var express = require('express');
var app = express();
const cors = require('cors')
const zipRouter = require('./routes/zipRouter');

app.use('/', zipRouter);

app.listen(3001, process.env.PORT, function () {
  console.log('Server is up...');
});
