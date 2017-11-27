const express = require('express');
const router = express.Router();
const Coaster = require('../models/coaster');
//const cheerio = require('cheerio'), $ =  cheerio.load(<'div id = "coaster-container">...</div>');




// get a list of coasters from the db
router.get('/coasters', function(req, res, next) {
    Coaster.find({}).sort({tableId: 1, coasterId: 1}).exec(function(err,coasters) {
        res.send(coasters);
    });
});

router.get('/coasters/:id', function(req, res, next) {
    Coaster.find({}).sort({tableId: -1}).exec(function(err,coasters) {
        res.send(coasters);
    });
});


// add a new coaster to the db
router.post('/coasters', function(req, res, next) {
    Coaster.create(req.body).then(function(coaster) {
        res.send(coaster);
    }).catch(next);
});

// update a coaster in the db
router.put('/coasters/:id', function(req, res, next) {
    Coaster.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
        Coaster.findOne({ _id: req.params.id }).then(function(coaster) {
            res.send(coaster);
        });
    }).catch(next);
});

//update a coaster by its coaster id instead of its generated mongoDb _id
router.put('/coasters/update/:coasterId', function(req, res, next) {
    Coaster.findOneAndUpdate({ coasterId: req.params.coasterId }, req.body).then(function() {
        Coaster.findOne({ coasterId: req.params.coasterId }).then(function(coaster) {
            res.send(coaster);

        });
    }).catch(next);
});

// delete a coaster from the db
router.delete('/coasters/:id', function(req, res, next) {
    Coaster.findByIdAndRemove({ _id: req.params.id }).then(function(coaster) {
        res.send(coaster);
    }).catch(next);
});


module.exports = router;
