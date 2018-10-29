const knex = require('knex')({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: null,
    password: null,
    charset: 'utf8'
  }
});

knex.raw('CREATE DATABASE algolia_build_101').then(() => knex.destroy());
