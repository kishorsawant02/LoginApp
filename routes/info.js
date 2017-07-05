var express = require('express');
var router = express.Router();

router.get('/quiz',ensureAuthenticated , function(req, res) {
	console.log('req.user', req.user);
    res.render('quiz');
});
router.get('/contact', function(req, res) {
	console.log('req.user', req.user);
    res.render('contact');
});


function ensureAuthenticated(req, res, next){
	console.log('req.user', req.user);
	if(req.isAuthenticated()){
		return next();
	} else {
		console.log('req.user', req.user);
		res.redirect('/users/login');
		console.log('req.user', req.user);
	}
}
module.exports = router;
