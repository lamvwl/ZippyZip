const getDB = require('../db/getDB');
const resultsLimit = 5 

module.exports = {

  findone: function(req,res) {
    getDB()
    .then(function (coll) {
      coll.findOne({})
      .then(function (doc) {
        res.send(doc);
      })
    })
    .catch(function (err) {
      console.log(err);
    })
  },
  findall: function(req,res) {
    const limit = Number(req.query.limit) || resultsLimit;
    getDB()
    .then(function (coll) {
      coll.find({}).limit(limit).toArray()
      .then(function (docs) {
        res.send(docs);
      })
    })
    .catch(function (err) {
      console.log(err);
    })
  },
  findcity: function (req,res) {
    const query = req.query.query || "";
    const limit = Number(req.query.limit) || resultsLimit;
    getDB()
    .then(function (coll) {
      coll.find({city: {$regex: query, $options:'i'}}).limit(limit).toArray()
    .then(function(docs) {
        res.send(docs);
      });
    })
    .catch(function (err) {
      console.log(err);
    })
  },
  findstate: function (req, res) {
    const query = req.query.query || "";
    const limit = Number(req.query.limit) || resultsLimit;
    getDB()
    .then(function (coll) {
      coll.find({state: {$regex: query, $options:'i'}}).limit(limit).toArray()
      .then(function(docs) {
        res.send(docs);
      });
    })
    .catch(function (err) {
      console.log(err);
    })
  } 
}








