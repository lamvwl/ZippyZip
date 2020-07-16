const DbConnection = require('./db');

module.exports = async function getDB() {
    try {
        let getDbConnect = await DbConnection();
        let result = await getDbConnect.db('test').collection('zips');
        return result;
    } catch (e) {
        return e;
    }
}
