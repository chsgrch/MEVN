var fs = require("fs");
const path = require("path");
const Crud = require("../baseCommand/logUserInfoInBase");
const Mail = require("../../mail/sendMailMessage");

const baseFuncDb = new Crud();
const sendMail = new Mail();

class UserKeeper {
  constructor(userParams) {
    this.userParams = userParams;
  }

  createUserInBase(userParams) {
    baseFuncDb
      .createUser(userParams)
      .then(id => {
        console.log(`new contact id is: ${id}`);
        userParams.id = id;
        this.writePathResumeToBase(userParams);
      })
      .catch(err => console.log(err));
  }

  // --- Write path to file resume in base ---
  writePathResumeToBase(userParams) {
    let pathLocal = path.resolve("./uploads/resume"); //Get path to upload directiry from relative path
    pathLocal += `/${userParams.id}`; //path on server side
    if (!fs.existsSync(pathLocal)) {
      //Create path on server
      fs.mkdirSync(pathLocal);
    }
    userParams.path = pathLocal;
    baseFuncDb
      .createUserUpload(userParams)
      .then(res => {
        console.log(`-> path param write in base: ${res}`);
        this.writeFileInUpload(userParams)
          .then(result => {
            sendMail.send(result);
          })
          .catch(err => {
            userParams.res.status(500).send(err);
          });
      })
      .catch(err => console.log(err));
  }

  //write file resume on server by path
  writeFileInUpload(userParams) {
    // let resume = req.files.file;
    let pathToResumeFile = userParams.path + "/" + userParams.resume.name;
    userParams.fileFullPath = pathToResumeFile;
    userParams.fileName = userParams.resume.name;

    return new Promise((resolve, reject) => {
      userParams.resume.mv(pathToResumeFile, function(err) {
        if (err) {
          reject(err);
        }
        resolve(userParams);
        // userParams.res.send("complete");
      });
    });
  }
}

module.exports = exports = UserKeeper;
