const actors = require('../actors.json');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('actors')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('actors').insert(actors);
    });
};
