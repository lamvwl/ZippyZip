var express = require('express');
var mongodb = require('mongodb');
var app = express();

var MONGODB_URI = 'mongodb://127.0.0.1:27017'
var app, db, coll; 
  
mongodb.MongoClient.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, function(err, client) {
    if(err) throw err;

    db = client.db('test');
    coll = db.collection('zips');

    app.listen(3000, process.env.PORT, function () {
      console.log('Server is up...');
    });
});  


app.get('/findone', function(req, res) { 
    coll.findOne({}, function(err, doc) {
      console.log(doc);
      res.send(doc);
    });
});


