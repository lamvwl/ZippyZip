const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb://127.0.0.1:27017';

function DbConnection () {

  var db = null;
  var instance = 0;

  async function DbConnect() {
    try {
      let _db = await MongoClient.connect(url,{
        useNewUrlParser: true,
        useUnifiedTopology: true
      });
      return _db
    } catch (e) {
      return e;
    }
  }

  return async function Get() {
    try {
          instance++;
          // console.log(`DbConnection called ${instance} times`);

          if (db != null) {
            console.log('Reusing existing db connection');
            return db;
          } else {
            console.log('Getting new db connection');
            db = await DbConnect();
            return db; 
          }
        } catch (e) {
          return e;
        }
  }
}

module.exports = DbConnection();