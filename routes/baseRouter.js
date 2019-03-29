const express = require('express');
const router = express.Router();

// handles the home page which is the index
router.get('/', (req, res) => {
	res.redirect('clucks/');
});

// route for the login page
router.get('/sign_in', (req, res) => {
	res.render('sign_in');
});

const COOKIE_MAX_AGE = 1000 * 60 * 60 * 24 * 7; // cookies will dissapear in a week

// this handles the login post
router.post('/sign_in', (req, res) => {
	const params = req.body;
	res.cookie('username', params.username, { maxAge: COOKIE_MAX_AGE });
	res.redirect('/');
});

//this handles the logout 
router.get('/sign_out', (req, res) => {
	res.clearCookie('username');
	res.redirect('/');
});

module.exports = router;