var express = require('express');
var router = express.Router();
const keycloak = require('../config/keycloak-config.js').getKeycloak();

router.get('/demo', function(req, res){
    res.send("Hello Anonymous demo");
});

// router.get('/user', function(req, res){
//     res.send("Hello User");
// });
router.get('/user', keycloak.protect('realm:user'), function(req, res){
    res.send("Hello User");
});


// router.get('/admin', function(req, res){
//     res.send("Hello Admin");
// });
router.get('/admin', keycloak.protect('admin'), function(req, res){
    res.send("Hello Admin");
});


// router.get('/all-user', function(req, res){
//     res.send("Hello All User");
// });
router.get('/all-user', keycloak.protect(['user','admin']), function(req, res){
    res.send("Hello All User");
});

module.exports = router;