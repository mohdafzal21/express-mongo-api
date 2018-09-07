var express = require('express');
var router = express.Router();
var db = require('../models');


router.get('/index',(req,res)=>{
  res.render('index');
});


/* GET home page. */
router.get('/', (req,res)=> {
      db.Hotels.find()
      .then((hotels)=> res.json(hotels))
      .catch((error)=> res.send(error));
});



// adding a new hotel
router.post('/',(req,res)=>{
      console.log(req.body);
      db.Hotels.create(req.body)
      
      .then(res.redirect('/index'))
      .catch((error)=>res.send(error));
});



router.get('/:id',(req,res)=>{
        const id = req.params.id;
         db.Hotels.findById(id)
          .then((hotels)=>res.json(hotels))
          .catch((err)=> (err));
});

//update
router.put('/:id',(req,res)=>{
  
 db.Hotels.findByIdAndUpdate({_id:req.params.id}, req.body)
  .then((hotels)=>res.json(hotels))
   .catch((err)=> (err));
})


//delete findBYIDandDELTE

router.delete('/:id',(req,res)=>{
  db.Hotels.remove({_id: req.params.id})
  .then((hotels)=>res.send("removed"))
});




module.exports = router;
