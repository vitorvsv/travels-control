const mongodb = require('mongodb');

const getDb = require('../util/database.util').getDb;

class User {

    constructor(name, email, fone, id) {
        this.name = name;
        this.email = email;
        this.fone = fone;
        this._id = id ? new mongodb.ObjectId(id) : null;
    }

    save() {
        const db = getDb();
        let dbOp;

        if (this._id) {
            dbOp = db.collection('users').updateOne({ _id: this._id}, { $set: this });
        } else {
            dbOp = db.collection('users').insertOne(this);
        }

        return dbOp 
            .then(result => {
                console.log('User insert');
                console.log(result);
            })
            .catch(err => {
                console.log('Error');
                console.log(err);
            });
    }

    static findById(id) {
        const db = getDb();
        return db.collection('users')
            .find({_id : new mongodb.ObjectId(id)})
            .next()
            .then(user => {
                return user;
            })
            .catch(err => {
                console.log(err);
            });

    }

    static deleteById(id) {
        const db = getDb();
        return db.collection('users')
            .deleteOne({_id: new mongodb.ObjectId(id)})
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);
            });
    }

    // This method return some users
    // Need rewrite to use pagination
    static fetchAll() {
        const db = getDb();
        return db.collection('users')
            .find({})
            .toArray()
            .then(users => {
                return users;
            })
            .catch(err => {
                console.log(err);
            });
    }
};

module.exports = User;