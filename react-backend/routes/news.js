var express = require('express');
var router = express.Router();
var db = require('../database.js');
/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  console.log('Trying to make a DB insert.');
  db.none('INSERT INTO Users(UserName, Email, Password) VALUES($1, $2, $3)',
        ['testuser', 'testuser@test.com', 'testuserpw']).
        then(() => {
          console.log('Success!');
        })
        .catch(error =>{
          console.log('ERROR: ', error);
        })

  res.json([{
    id: 1,
    title: "Title 1"
  },
  {
    id: 2,
    title: "Title 2"
  }])
});

module.exports = router;
