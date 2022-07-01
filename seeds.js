//inserting into pets table some data
exports.seed = async function (knex) {
	// Deletes ALL existing entries
	await knex('pets').del();
	await knex('pets').insert([
		{ name: 'daisy', description: 'helo', age: 5 },
		{ name: 'juan', description: 'helo', age: 5 },
		{ name: 'yerr', description: 'helo', age: 5 },
	]);
};
