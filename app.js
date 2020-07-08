var express = require('express');
var mongodb = require('mongodb');
var app = express();

var MONGODB_URI = 'mongodb://127.0.0.1:27017'

app.get('/', function(req, res) { 
  
  mongodb.MongoClient.connect(MONGODB_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true
   } ,function(err, client) {
  if(err) throw err;

  const db = client.db('test')
  var coll = db.collection('zips');

    coll.findOne({}, function(err, doc) {
      console.log(doc);
      res.send(doc);
    });
  });  
});

app.listen(3000, process.env.PORT, function () {
  console.log('Server is up...');
});

