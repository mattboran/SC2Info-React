var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
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
