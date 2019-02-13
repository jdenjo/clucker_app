const express = require('express');
const router = express.Router();
const knex = require('../db/client');


// route to enter new cluck
router.get('/new', (req, res) => {
	res.render('clucks/new');
});

// route which adds cluck to DB
router.post('/new', (req, res) => {
    const formData = req.body;
    console.log(formData);
	knex('clucks')
		.insert({
			content: formData.content,
            image_url: formData.image_url,
            username: formData.username,
		})
		.returning('*')
		.then(() => {
			res.redirect('/clucks');
		});
});

//this route generates clucks in the DB for index
router.get('/clucks', (req, res) => {
	knex('clucks')
		.orderBy('created_at', 'desc')
		.then(clucks => {
			res.render('clucks/index', { clucks: clucks });
		});
});

module.exports = router;