const express = require ('express');
const router = express.Router();
const Coaster = require('../models/coaster');

// get a list of coasters from the db
router.get('/coasters', function(req, res, next){
    Coaster.find({}).then(function(coasters){
      res.send(coasters);
    });
});

// add a new coaster to the db
router.post('/coasters', function(req, res, next){
    Coaster.create(req.body).then(function(coaster){
        res.send(coaster);
    }).catch(next);
});

// update a coaster in the db
router.put('/coasters/:id', function(req, res, next){
    Coaster.findByIdAndUpdate({_id: req.params.id}, req.body).then(function(){
        Coaster.findOne({_id: req.params.id}).then(function(coaster){
            res.send(coaster);
        });
    }).catch(next);
});

// delete a coaster from the db
router.delete('/coasters/:id', function(req, res, next){
    Coaster.findByIdAndRemove({_id: req.params.id}).then(function(coaster){
        res.send(coaster);
    }).catch(next);
});

module.exports = router;
