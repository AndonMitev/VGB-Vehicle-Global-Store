const mongoose = require('mongoose');

require('../models/user');

module.exports = config => {
  mongoose.connect(config.dbPath, {
    useNewUrlParser: true
  });

  const db = mongoose.connection;
  db.once('open', err => {
    if (err) throw err;
  });
  db.on('error', reason => console.log(reason));
}