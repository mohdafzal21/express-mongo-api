var express = require('express');
var router = express.Router();
var db = require('../models');


router.get('/test',(req,res)=>{
  res.send("this is test route");
});


/* GET home page. */
router.get('/', (req,res)=> {
      db.Hotels.find()
      .then((hotels)=> res.json(hotels))
      .catch((error)=> res.send(error));
});

router.post('/',(req,res)=>{
  console.log(req.body);
      db.Hotels.create(req.body)
      .then((hotels)=> res.json(hotels))
      .catch((error)=>res.send(error));
});

module.exports = router;
