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
  let hash = bcrypt.hashSync(password, 15);
  const insert = {
    name: 'register-user',
    text: 'INSERT INTO users(${this:name}) VALUES(${username}, ${email}, ${hash}) RETURNING id;',
    values: [username, email, hash]
  }
  console.log('insert string: ',JSON.stringify(insert));
  db.one({
    text: 'INSERT INTO users(username, email, password) VALUES($1, $2, $3) RETURNING id;',
    values: [username, email, hash]
  })
    .then(resp => {
      console.log('returning: ', resp.id);
      res.sendStatus(200);
    })
    .catch(error => {
      console.log('error: ', error);
      res.sendStatus(500);
    });

  console.log("Username: ", username);
});
module.exports = router;
