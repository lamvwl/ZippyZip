var express = require('express');
var mongodb = require('mongodb');
var app = express();

var MONGODB_URI = 'mongodb://127.0.0.1:27017'
var app, db, coll;
var resultsLimit = 5 
  
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

app.get('/findall', function(req, res) { 
    coll.find({}).toArray(function(err, docs) {
      console.log(docs);
      res.send(docs);
    });
});

app.get('/findcity*', function(req, res) { 
    const query = req.query.query;
    const limit = Number(req.query.limit) || resultsLimit;
    coll.find({city: {$regex: query, $options:'i'}}).limit(limit).toArray(function(err, docs) {
      res.send(docs);
    });
});

app.get('/findstate*', function(req, res) { 
    const query = req.query.query;
    const limit = Number(req.query.limit) || resultsLimit;
    coll.find({state: {$regex: query, $options:'i'}}).limit(limit).toArray(function(err, docs) {
      res.send(docs);
    });
});
