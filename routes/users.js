var express = require('express');
var router = express.Router();
var db = require('../models')

/* GET users listing. */
// localhost:3000/users/
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/login' ,(req,res)=>{
        db.Users.find()
        .then((users)=> res.json(users))
        .catch((err)=> res.send(err));
});

router.post('/login',(req,res)=>{
      db.Users.create(req.body)
      .then((newUsers)=> res.json(newUsers))
      .catch((error)=> res.send(error))
});


router.get('/signup',(req,res)=>{
  res.send("this is signup of users")
})

module.exports = router;
