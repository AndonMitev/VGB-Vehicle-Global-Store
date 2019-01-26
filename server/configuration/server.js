const app = require('express')();
const passport = require('passport');
const bodyParser = require('body-parser');
const config = require('./config');
const cors = require('cors');
require('./database')(config.development);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(passport.initialize());
require('./passport')(passport);

const routes = require('./routes');
app.use(routes);
app.use(cors({ origin: 'http://localhost:4200' }));
app.use((req, res, next) => {
  if (req.user) {
    res.locals.currentUser = req.user;
  }
  next();
});
module.exports = app.listen(config.development.port,
  () => console.log(`Server is running on port ${config.development.port}`));