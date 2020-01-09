const UserKeeper = require("./userSaving/userDataKeeperInBase");

// info in databse
exports.save = function(req, res) {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  //Get resume params
  let userParams = {
    surname: req.body.surname[0],
    name: req.body.name[0],
    mail: req.body.mail[0],
    res: res,
    resume: req.files.file,
    vacansy: req.body.vacansy,
    vacansyId: req.body.vacansyId
  };
  const Keeper = new UserKeeper(userParams);
  Keeper.createUserInBase(userParams);
};
