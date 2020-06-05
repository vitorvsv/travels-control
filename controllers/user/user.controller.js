const User = require('../../models/user.model'); 

exports.getIndex = (req, res, next) => {
    res.render('user/index', {
        users: User.getUsers()
    });
};