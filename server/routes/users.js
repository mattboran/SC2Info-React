var express = require('express');
var router = express.Router();
const fs = require('fs');

const jwt = require('jsonwebtoken');
const db = require('../static/database').db;
const bcrypt = require('bcrypt');

const cert = fs.readFileSync('./bin/ca/private.key', 'utf8');
/* GET users listing. */


router.get('/secret', function(req,res,next){

  db.any('SELECT (id, username, email) FROM users; ')
    .then(function(data) {
      res.send(data)
    }).catch(function(error) {
      res.send(error)
    });

});

router.post('/register', function(req, res, next){
  const { username, email, password } = req.body;
  let timestamp = Number(new Date());
  let date = new Date(timestamp);
  let hash = bcrypt.hash(password, 10, function(err, hash){
    db.one({
      name: 'register-user',
      text: 'INSERT INTO users(username, email, password, register_date) VALUES($1, $2, $3, $4) RETURNING id;',
      values: [username, email, hash, date]
    })
    .then(resp => {
      // TODO: return nothing
      res.json(resp.id);
    })
    .catch(error => {
      if (error.code == 23505){
        res.status(403).json(error.constraint);
      }else{
        console.log("Some other error!");
      }
    });
  });
});

//First invalidate the existing session
// router.post('/signin', function(req,res,next){
//
//   // If a user already has an auth token, there's some problem.
//   // TODO: handle this appropriately besides from client side.
//   if (req.session.token){
//     console.log("A logged in user is trying to re-log.");
//   }
//
//   req.session.loggingIn = true;
//   req.session.user = req.body.username;
//   req.session.save(function(){
//     return req.session.destroy( function(err){
//       if(err){
//         console.log("There was an error: ", err);
//       }else{
//         console.log("Existing session destroyed: ID ",req.sessionID);
//       }
//       res.clearCookie('connect.sid');
//       return next();
//     });
//   });

  // Save some notion that the user didn't dissapear, but instead logged in
// });

// Query the DB on user signin
router.post('/signin', function(req,res,next){

  const { username, password } = req.body;
  db.one({
    name: 'fetch-user',
    text: 'SELECT * from users WHERE username = $1; ',
    values: [username]
  })
    .then(resp => {
      const hashPassword = resp.password;
      bcrypt.compare(password, hashPassword, function(err, re){
        if (re){
          req.dbResponse = resp;
          return next();
        }
        else {
          res.status(403).json('invalidpassword');
        }
      });
    })
    .catch(error => {
      if (error.name === 'QueryResultError'){
        res.status(403).json('invalidusername');
      }
      else{
        res.status(403).json('othererror');
      }
    });
});

// IF DB Query was correct (password was right), create JWT
router.post('/signin', function(req,res,next){
  const resp = req.dbResponse;
  jwt.sign({
    data:
    {
      id: resp.id,
      username: resp.username
    }
  }, cert, {algorithm: 'RS256', expiresIn: '3d'},
  function (err, token){
    if (err){
      console.log("Error generating token.");
    } else {
      req.token = token;
      return next();
    }
  });
});

// If JWT was created successfully, set username, password, etc in token
router.post('/signin', function(req,res, next){
  const user = {
    ...req.dbResponse,
    password: 'password-omitted',
    token: req.token,
    sessionID: req.sessionID
  };

  // save username in the curent session
  req.session.username = user.username
  req.session.token = req.token;
  req.session.save(function() {
    console.log("Login equest ended with the following in sessionID: ", req.sessionID);
  //  res.cookie('token',req.token);
    res.json(user);
    return;
  });
});

module.exports = router;
