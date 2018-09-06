const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/test',(req,res)=>{
    res.send("this is test route of sellers ")
});
// localhost:3000/sellers
router.get('/',(req,res)=>{
      db.Seller.find()
      .then((sellers)=> res.json(sellers))
      .catch((err)=> res.send(err));
});

router.post('/',(req,res)=>{
    db.Seller.create(req.body)
    .then((newSellers)=> res.json(newSellers))
    .catch((err)=> res.send(err));
})

router.get('/register',(req,res)=>{
    res.send("this is sellers register")
})



module.exports = router;