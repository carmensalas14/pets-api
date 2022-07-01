const { Pool, Client } = require('pg');
const pool = new Pool({
	user: 'postgres',
	// host: 'localhost', //will default to local host
	database: 'pets',
	password: '',
	// port: 5432, //will default to this port if not included
});

// querying from the database
// pool.query('SELECT * FROM pets', (err, res) => {
// 	// we want the results
// 	console.log(res);
// 	pool.end();
// });

// we want the pool object to be available everywhere
// it is the obj we use to always make a query to the db
module.exports = pool;
