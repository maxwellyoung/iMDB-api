exports.up = function (knex) {
	return knex.schema.createTable('movies', (table) => {
		table.increments('id')
		table.string('title')
		table.string('img')
		table.string('imdb_id')
		table.boolean('watched')
	})
}

exports.down = function (knex) {
	return knex.schema.dropTable('movies')
}
