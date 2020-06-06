const User = require('../../models/user.model'); 

exports.getIndex = (req, res, next) => {
    User.fetchAll()
        .then(users => {
            res.render('user/index', {
                users: users
            });
        })
        .catch(err => {
            console.log(err);
        });
};