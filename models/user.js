const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    validate: /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){3,15}$/i,
    required: [true, 'Username is required'],
    unique: [true, 'Username is already used'],
    minlength: [3, 'Username must be at least 3 symbols long'],
    maxlength: [15, 'Username cannot be more than 15 symbols long'],
  },
  email: {
    type: String,
    validate: [/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i, 'Please provide valid email'],
    required: [true, 'Email is required'],
    unique: [true, 'Email is already used'],
  },
  password: {
    type: String,
    validate: /^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){3,15}$/i,
    required: [true, 'Password is required'],
    minlength: [3, 'Password must be at least 3 symbols long'],
    maxlength: [15, 'Password cannot be more than 15 symbols long'],
  },
  role: {
    roles: [{ type: String }],
    enum: ['Client', 'Manager', 'Admin'],
    default: ['Client']
  },
  registeredOn: {
    type: Date,
    default: Date.now
  }
});

UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  if (this.password) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(this.password, salt);
      this.password = hash;
    } catch (error) {
      return next(error);
    }
    next();
  }
});

UserSchema.methods.comparePassword = async function (password, cb) {
  try {
    const isMatch = await bcrypt.compare(password, this.password);
    return cb(null, isMatch);
  } catch (err) {
    return cb(err, false);
  }
}

const User = mongoose.model('User', UserSchema);
module.exports = User;