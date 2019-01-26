module.exports = {
  development: {
    port: process.env.PORT || 7000,
    dbPath: 'mongodb://localhost:27017/db',
    secret: 'verySecretKeyForWebTokens'
  },
  production: {}
};