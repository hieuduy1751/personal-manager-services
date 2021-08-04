module.exports.loginRegex = (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let status = 0;
  let error = '';

  if(username == '')
    error = 'username is required';
  else if (!username.match(/^[a-zA-Z0-9]{8,16}$/))
    error = 'Username contain characters, digits and must have 8-16 length';
  else {
    error = '';
    status++;
  }

  if(password == '')
    error = 'Password Required';
  else if (!password.match(/^[a-zA-Z0-9]{8,16}$/))
    error = 'Password contain characters, digits and must have 8-16 length';
  else {
    error = '';
    status++;
  }
  
  if(status == 2) {
    next();  
  }
  else {
    res.locals.username = username;
    res.locals.password = password;
    res.status(500).send({ error })    
  }
}

module.exports.registerRegex = (req, res, next) => {
  let username = req.body.username;
  let password = req.body.password;
  let status = 0;
  let error = '';

  if(username == '')
    error = 'username is required';
  else if (!username.match(/^[a-zA-Z0-9]{8,16}$/))
    error = 'Username contain characters, digits and must have 8-16 length';
  else {
    error = '';
    status++;
  }

  if(password == '')
    error = 'Password Required';
  else if (!password.match(/^[a-zA-Z0-9]{8,16}$/))
    error = 'Password contain characters, digits and must have 8-16 length';
  else {
    error = '';
    status++;
  }
  
  if(status == 2) {
    next();  
  }
  else {
    res.locals.username = username;
    res.locals.password = password;
    res.status(500).send({ error })    
  }
}