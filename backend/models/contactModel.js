// contactModel.js
var mongoose = require("mongoose");
// Setup schema
var contactSchema = mongoose.Schema({
  vacansy: {
    type: String,
    require: true
  },
  vacansyId: {
    type: String,
    require: true
  },
  surname: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  mail: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});
// Export Contact model
var Contact = (module.exports = mongoose.model("contact", contactSchema));
module.exports.get = function(callback, limit) {
  Contact.find(callback).limit(limit);
};
