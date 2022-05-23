const User = require("./../model/user.model");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

const register = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass){
        if(err) {
            res.json({
                error: err
            })
        }
        let user = new User ({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            dateOfBirth: req.body.dateOfBirth,
            pasword: hashedPass
        })
        user.save()
        .then(user => {
            res.json({
                message: 'User created Successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: "An error occured"
            })
        })
    })
}

const login = (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    User.findOne({$or: [{email:username}, {phone:username}]})
    .then(user => {
        if(user){
            bcrypt.compare(password, user.password, function(err, result){
                if(err) {
                    res.json({
                        error: err
                    })
                }
                if(result){
                    let token = jwt.sign({firstname: user.firstname}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Login Succcessful!',
                        token
                    })
                }else{
                    res.json({
                        message: "Password does not match!"
                    })
                }
            })
        }else{
            message: 'No user found!'
        }
    })
}

module.exports = {
    register,
    login
}