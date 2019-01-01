const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../configuration/config');

module.exports = passport => {
  const options = {};
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  options.secretOrKey = config.development.secret;

  passport.use(new JwtStrategy(options, (jwtPayload, done) => {
    User.findOne({ _id: jwtPayload._id })
      .then(user => {
        if (user) {
          return done(null, user);
        }
        return done(null, false);
      })
      .catch(error => {
        return done(null, error);
      });
  }));
}