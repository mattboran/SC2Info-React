var express = require('express');
var router = express.Router();

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

router.post('/register', function(req, res, next){
  res.send("You're going to add a user! Here's what you sent: "+JSON.stringify(req));
});
module.exports = router;
