const User = require('mongoose').model('User');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
const config = require('../../configuration/config');

const registerUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    return res.send(JSON.stringify(newUser));
  } catch (err) {
    return res.send(JSON.stringify(err))
  }
}

const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) {
      return res.status(401).json({ message: 'Invalid data' });
    }
    
    user.comparePassword(req.body.password, (err, isMatch) => {
      if(isMatch && !err) {
        const token = jwt.sign({user}, config.development.secret,
        {
          expiresIn: 10080
        })
        console.log(user);
        res.send(JSON.stringify({
          success: true,
          statusCode: 200,
          token
        }));
      }
    });
  } catch (error) {
    console.log(error);
  }
}

// const verify = (req, res, next) => {
//   const token = req.headers.authorization;

//   if (token) {
//     req.token = token.split(' ')[1];
//   } else {
//     res.json(JSON.stringify({
//       statusCode: 403,
//       message: 'Forbidden'
//     }))
//   }

//   next();
// }

// const getPosts = (req, res) => {
//   jwt.verify(req.token, 'secretKey', (err, authData) => {
//     if (err) {
//       res.send(JSON.stringify({
//         statusCode: 403,
//         message: 'Forbidden'
//       }))
//     } else {
//       res.send(JSON.stringify({
//         statusCode: 200,
//         authData
//       }))
//     }
//   })
// }

router
  .post('/register', registerUser)
  .post('/login', loginUser);

module.exports = router;