const userModel = require("../models/userRegModel");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

exports.registerUserInBase = function(req, res) {
  //POST

  if (
    req.body.email &&
    req.body.username &&
    req.body.password &&
    req.body.role
  ) {
    var userData = {
      email: req.body.email,
      username: req.body.username,
      password: req.body.password,
      role: req.body.role
    };

    console.log(" --- ADDIND NEW USER IN BASE... --- ");
    var user = new userModel();
    user.email = userData.email;
    user.username = userData.username;
    user.password = userData.password;
    user.role = userData.role;

    // save the contact and check for errors
    user.save(function(err) {
      // Check for validation error
      if (err) res.status(500).send(err);
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

      res.status(200).send({
        message: "success"
      });
      console.log(`send _id user in register route: ${user._id}`); //GET ID
    });
  } else {
    let err = new Error("Необходимо заполнить все поля");
    res.status(500).send(err);
  }
};
