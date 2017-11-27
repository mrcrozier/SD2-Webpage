const express = require('express');
const router = express.Router();
const Coaster = require('../models/coaster');
//const cheerio = require('cheerio'), $ =  cheerio.load(<'div id = "coaster-container">...</div>');
var cheerio = require('cheerio'),
     $ = cheerio.load('index.html'),
     fs = require('fs');
 fs.readFile('./public/index.html', function (err, html) {
    if (err) {
        throw err;
    } else {
        $ = cheerio.load(html.toString());
        console.log("gr8 success");
    }});



// get a list of coasters from the db
router.get('/coasters', function(req, res, next) {
    Coaster.find({}).then(function(coasters) {
        res.send(coasters);
    });
});

router.get('/coasters/:id', function(req, res, next) {
    Coaster.find({}).then(function(coasters) {
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

            console.log($('form .search').attr('label'));
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
