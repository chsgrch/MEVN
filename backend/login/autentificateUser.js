let bcrypt = require("bcrypt");
let userModel = require("../models/userRegModel");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

exports.autentificateUser = function(req, res) {
  //POST
  if (req.body.email && req.body.password) {
    let userParam = {
      email: req.body.email,
      password: req.body.password
    };

    userModel.findOne({ email: userParam.email }).exec(function(err, user) {
      if (err) {
        res.json(err);
      } else if (!user) {
        var err = new Error("User not found.");
        err.status = 401;
        res.json(err);
      }
      bcrypt.compare(userParam.password, user.password, function(err, result) {
        if (err) {
          res.json({
            err: err,
            message: "uncorrect"
          });
        }
        if (result === true) {
          let token = jwt.sign({ id: user.id }, config.secret, {
            expiresIn: 86400 // expires in 24 hours
          });

        res.cookie('AUTH-TOKEN', token) // options is optional
        res.cookie('USER-ROLE', user.role)
        res.cookie('AUTH-STATUS', 'success')

          res
            .status(200)
            .json({ message: "correct", auth: true, token: token, user: user });
          console.log(`send _id user in authentificate route: ${user._id}`); //GET ID
        } else {
          res.json({
            message: "uncorrect",
            user: user
          });
        }
      });
    });
  } else {
    let err = new Error("Необходимо заполнить все поля");
    res.json(err);
  }
};