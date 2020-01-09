Contact = require("../../models/contactModel");
Upload = require("../../models/uploadFilePathModel");

// --- Write in mongo database ---
class Crud {
  constructor(data) {}
  async createUser(userData) {
    let surname = userData.surname;
    let name = userData.name;
    let mail = userData.mail;
    let vacansy = userData.vacansy;
    let vacansyId = userData.vacansyId;

    var contact = new Contact();
    contact.surname = surname;
    contact.name = name;
    contact.mail = mail;
    contact.vacansy = vacansy;
    contact.vacansyId = vacansyId;
    return new Promise((resolve, reject) => {
      contact.save(function(err) {
        // Check for validation error
        if (err) reject(err);
        else {
          resolve(contact._id);
        }
      });
    });
  }
  async createUserUpload(uploadData) {
    var upload = new Upload();
    upload.userid = uploadData.id;
    upload.path = uploadData.path + "/" + uploadData.resume.name;
    return new Promise((resolve, reject) => {
      upload.save(function(err) {
        // Check for validation error
        if (err) reject(err);
        else {
          resolve(upload._id);
        }
      });
    });
  }

  readById(id) {
    return new Promise((resolve, reject) => {
      Upload.findById(id, function(err, valueFromBase) {
        if (err) reject(err);
        resolve(valueFromBase);
      });
    });
  }
  update() {}
  delete() {}
}
module.exports = exports = Crud;
