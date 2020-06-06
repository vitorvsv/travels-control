const getDb = require('../util/database.util').getDb;

class User {

    constructor(name, email, fone) {
        this.name = name;
        this.email = email;
        this.fone = fone;
    }

    save() {
        const db = getDb();
        return db.collection('users')
            .insertOne(this)
            .then(result => {
                console.log('User insert');
                console.log(result);
            })
            .catch(err => {
                console.log('Error');
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