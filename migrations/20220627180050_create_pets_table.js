/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex, Promise) {
	//we are essentially returning a table, str is table name, callback function is schema
	return knex.schema.createTable('pets', function (t) {
		t.increments('id').primary();
		t.string('name').notNull();
		t.text('description').nullable();
		t.decimal('age').notNull();
	});
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
	return knex.schema.dropTable('pets');
};
