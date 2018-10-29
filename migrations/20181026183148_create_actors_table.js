exports.up = function(knex, Promise) {
  return knex.schema.createTable('actors', function(table) {
    table.increments('objectID');
    table.string('name');
    table.integer('rating');
    table.string('image_path');
    table.string('alternative_name');
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('actors');
};
