
exports.up = function(knex) {
  return knex.schema.createTable('albums', (table) => {
    table.increments('id')
    table.string('album')
    table.string('artist')
    table.integer('year')
  })
  
};


exports.down = function(knex) {
  return knex.schema.dropTable('albums')
};
