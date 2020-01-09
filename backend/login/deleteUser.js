let userModel = require("../models/userRegModel");

// Handle delete user
exports.delete = function(req, res) {
  //DELETE
  if (req.body.email) {
    // && req.body.password
    let userParam = {
      email: req.body.email
      // password: req.body.password
    };
    userModel.remove({ email: userParam.email }, function(err, contact) {
      if (err) res.send(err);
      res.json({
        status: "success",
        message: "Contact deleted"
      });
    });
  }
};

