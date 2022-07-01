const express = require('express');
const pool = require('../dbconfig');
const app = express();
const getAllPets = require('./controllers/petsController.js');
const port = 3036;

app.get('/', async (req, res) => {
	res.send('gello');
	res.end();
});

app.get('/pets', getAllPets());

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
