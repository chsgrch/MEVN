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
      } else {
        bcrypt.compare(userParam.password, user.password, function(
          err,
          result
        ) {
          if (err) {
            res.json({
              err: err,
              message: "uncorrect"
            });
          }
          if (result === true) {
            let token = jwt.sign(
              {
                id: user.id,
                email: user.email,
                username: user.username,
                role: user.role
              },
              config.secret,
              {
                expiresIn: 86400 // expires in 24 hours
              }
            );
            res.cookie("AUTH-TOKEN", token); // options is optional

            res.status(200).json({ message: "correct" });
            console.log(`send _id user in authentificate route: ${user._id}`); //GET ID
          } else {
            res.json({
              message: "uncorrect"
            });
          }
        });
      }
    });
  } else {
    let err = new Error("Необходимо заполнить все поля");
    res.json(err);
  }
};
