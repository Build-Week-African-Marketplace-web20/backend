const environment = process.env.NODE_ENV || 'development';
let config = require('../knexfile')[environment];                       // you will have this while running this enviorment with postgresql
module.exports = require('knex')(config);