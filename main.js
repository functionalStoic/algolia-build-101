require('dotenv').config();
const algoliasearch = require('algoliasearch');
const client = algoliasearch(process.env.APPID, process.env.ADMIN_API_KEY);

const index = client.initIndex('T02_push');

/**
 * Simple method to add array of objects to index
 */
// const actors = [
//   { name: 'Tom Hanks', rating: 1200 },
//   { name: 'Lucy Liu', rating: 1299 }
// ];

// index.addObjects(actors);
// index.clearIndex();

/**
 * Add objects from JSON file to Index
 */
// const actors = require('./actors.json');
// index.addObjects(actors);
// index.clearIndex();

/**
 * Add objects from DB to Index
 */
// const db = require('knex')(require('./knexfile').development);

// db.schema
//   .raw('SELECT * FROM actors')
//   .then(res => {
//     console.log(res);
//     index.addObjects(res.rows);
//   })
//   .catch(err => console.log(err));
// index.clearIndex();

/**
 * Add objects from DB, break into chunks
 * for when results are larger than recommended
 */
const db = require('knex')(require('./knexfile').development);
const chunk = require('lodash.chunk');

db.schema
  .raw('SELECT * FROM actors')
  .then(res => {
    chunk(res.rows, 100).forEach(chunk => {
      index.addObjects(chunk);
    });
  })
  .catch(err => console.log(err));
// index.clearIndex();
