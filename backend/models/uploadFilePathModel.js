//uploadFilePathModel.js
var mongoose = require("mongoose");
// Setup schema
var uploadSchema = mongoose.Schema({
  userid: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});
// Export Upload model
var Upload = (module.exports = mongoose.model("upload", uploadSchema));
module.exports.get = function(callback, limit) {
  Upload.find(callback).limit(limit);
};
