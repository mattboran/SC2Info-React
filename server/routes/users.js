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
  let timestamp = Number(new Date());
  let date = new Date(timestamp);
  db.one({
    name: 'register-user',
    text: 'INSERT INTO users(username, email, password, register_date) VALUES($1, $2, $3, $4) RETURNING id;',
    values: [username, email, hash, date]
  })
    .then(resp => {
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
module.exports = router;
