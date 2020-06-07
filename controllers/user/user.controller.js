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

exports.getCreate = (req, res, next) => {
    res.render('user/create');
};

exports.postCreate = (req, res, next) => {
    const user = new User(req.body.name, req.body.email, req.body.fone);
    user.save()
        .then(result => {
            console.log('User added');
            console.log(result);
            res.redirect('/users');
        })
        .catch(err => {
            console.log('User error');
            console.log(err);
        });
};