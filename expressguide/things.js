var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
   res.send('GET route for things.js');
});

router.get('/about', function(req, res){
    res.send('GET things slash about');
 });

router.post('/', function(req, res){
   res.send('POST route for things.js');
});


//export this router to use in our index.js
module.exports = router;