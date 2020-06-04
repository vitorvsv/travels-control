const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = callback => {
    MongoClient.connect('mongodb://root:root@172.23.0.3:27017/admin')
    .then(client => {
        callback(client);
    })
    .catch(err => {
        console.log('DB connection error');
        console.log(err);
    });
}

module.exports = mongoConnect;