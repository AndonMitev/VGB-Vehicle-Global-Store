const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userConfiguration =
  require('./modelConfigs/propsSchemaConfig/userModelConfiguration');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    validate: [
      userConfiguration.username.pattern,
      userConfiguration.username.patternErrorMsg
    ],
    required: [true, userConfiguration.username.requiredErrorMsg],
    unique: [true, userConfiguration.username.uniqueErrorMsg],
    minlength: [
      userConfiguration.password.minLength, userConfiguration.password.minLengthErrorMsg
    ],
    maxlength: [
      userConfiguration.password.maxLength,
      userConfiguration.password.maxLengthErrorMsg
    ],
  },
  email: {
    type: String,
    validate: [
      userConfiguration.email.pattern,
      userConfiguration.email.patternErrorMsg
    ],
    required: [true, userConfiguration.email.requiredErrorMsg],
    unique: [true, userConfiguration.email.uniqueErrorMsg],
  },
  password: {
    type: String,
    validate: [
      userConfiguration.password.pattern,
      userConfiguration.password.patternErrorMsg
    ],
    required: [true, userConfiguration.password.requiredErrorMsg],
    minlength: [
      userConfiguration.password.minLength,
      userConfiguration.password.minLengthErrorMsg
    ],
    maxlength: [
      userConfiguration.password.maxlength,
      userConfiguration.password.maxLengthErrorMsg
    ],
  },
  role: {
    roles: [{ type: String }],
    enum: [...userConfiguration.roles.validRoleTypes],
    default: [userConfiguration.roles.default]
  },
  country: {
    type: String,
    required: [true, userConfiguration.country.requiredErrorMsg],
    minlength: [
      userConfiguration.country.minLength,
      userConfiguration.country.minLengthErrorMsg
    ],
    maxlength: [
      userConfiguration.country.maxlength,
      userConfiguration.country.maxLengthErrorMsg
    ]
  },
  region: {
    type: String,
    required: [true, userConfiguration.region.requiredErrorMsg],
    minlength: [
      userConfiguration.region.minLength,
      userConfiguration.region.minLengthErrorMsg
    ],
    maxlength: [
      userConfiguration.region.maxlength,
      userConfiguration.region.maxLengthErrorMsg
    ]
  },
  city: {
    type: String,
    required: [true, userConfiguration.city.requiredErrorMsg],
    minlength: [
      userConfiguration.city.minLength,
      userConfiguration.city.minLengthErrorMsg
    ],
    maxlength: [
      userConfiguration.city.maxlength,
      userConfiguration.city.maxLengthErrorMsg
    ]
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