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

app.use(cors({
  origin: 'http://localhost:4200',
  optionsSuccessStatus: 200
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Methods',
      'PUT, POST, PATCH, DELETE, GET'
    );
    return res.status(200).json({});
  }
  next();
});

app.use((req, res, next) => {
  if (req.user) {
    res.locals.currentUser = req.user;
  }
  next();
});

app.use(routes);
module.exports = app.listen(config.development.port,
  () => console.log(`Server is running on port ${config.development.port}`));