var express = require('express');
var router = express.Router();
const db = require('../static/database').db;
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
    id: 1,
    username: "thatdude33"
  },
  {
    id: 2,
    username: "ThatDude33"
  }])
});

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
          const user = {
            ...resp
          }
          res.json(user);
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
        console.log("Some other error!");
        res.status(403).json('othererror');
      }
    });
});
module.exports = router;
