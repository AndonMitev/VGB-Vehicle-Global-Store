const app = require('express')();
const passport = require('passport');
const bodyParser = require('body-parser');
const config = require('./config');
require('./database')(config.development);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./passport')(passport);

const routes = require('./routes');
app.use(routes);


module.exports = app.listen(config.development.port,
  () => console.log(`Server is running on port ${config.development.port}`));