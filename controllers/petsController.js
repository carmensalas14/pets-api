const getAllPets = async (req, res) => {
	console.log('hi');
	const data = await pool.query('SELECT * from pets').then((results) => results.rows);
	res.send(data);

	res.end();
};

module.export = getAllPets;
