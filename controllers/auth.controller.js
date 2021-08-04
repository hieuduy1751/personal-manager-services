const User = require('../models/user.model');
const md5 = require('md5');

module.exports.postLogin = async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if(user) {
    if(md5(req.body.password) == user.password) {
      res.cookie('sessionID', user.username, {
        signed: true
      });
      res.send({
        status: 'success',
        message: 'Login success'
      });
    }
    else
      res.send({
        status: 'fail',
        message: 'Wrong password'
      })
  } else
    res.send({
      status: 'fail',
      message: 'Username does not exist'
    });
}

module.exports.postRegister = (req, res) => {
  const user = new User({
    username: req.body.username,
    password: md5(req.body.password).toString()
  })

  user.save(error => {
    if(error) {
      if (error.name === 'MongoError' && error.code === 11000) {
        return res.status(422).send({ status: 'fail', message: 'User already exist!' });
      }
      else
        return res.status(422).send(error);
      }
      res.send({
        status: 'success'
      })
    })
}