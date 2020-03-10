const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/auth');
//var projects = require('../projects.json');


// Welcome Page
router.get('/', (req, res) => res.render('welcome'));

// Dashboard
router.get('/newhomepage', ensureAuthenticated, (req, res) => 
    res.render('newhomepage', {
        name: req.user.name
    }));





module.exports = router;