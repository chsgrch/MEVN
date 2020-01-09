var mongoose = require('mongoose');
let bcrypt =  require('bcrypt');
// mongoose.set('useCreateIndex', true);

var UserSchema = new mongoose.Schema({
  email: {
    type: String,
    // unique: true,
    required: true,
    // trim: true
  },
  username: {
    type: String,
    // unique: true,
    required: true,
    // trim: true
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', function (next) {
    var user = this;
    bcrypt.hash(user.password, 10, function (err, hash){
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    })
  });

var user = module.exports = mongoose.model('users', UserSchema);
module.exports.get = function (callback, limit) {
    user.find(callback).limit(limit);
}