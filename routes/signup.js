var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signup', function(req, res, next) {
  res.send('Welcome to Signup');
});


module.exports = router;
