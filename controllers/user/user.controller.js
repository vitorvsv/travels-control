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
}

exports.getCreate = (req, res, next) => {
    res.render('user/create');
}

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
}

exports.getEdit = (req, res, next) => {
    if (!req.params.id) {
        return res.redirect('/');
    }

    User.findById(req.params.id)
        .then(user => {
            res.render('user/edit', {
                user: user
            });
        })
        .catch(err => {
            console.log(err);
        });
}

exports.postEdit = (req, res, next) => {
    if (!req.params.id) {
        return res.redirect('/');
    }

    const user = new User(
        req.body.name,
        req.body.email,
        req.body.fone,
        req.params.id,
    );

    user.save()
        .then(result => {
            res.redirect('/users');
        })
        .catch(err => {
            console.log(err);
        });
}

exports.postDelete = (req, res, next) => {
    if (!req.params.id) {
        return res.redirect('/');
    }

    User.deleteById(req.params.id)
        .then(result => {
            res.redirect('/users');
        })
        .catch(err => {
            console.log(err);
        });
}