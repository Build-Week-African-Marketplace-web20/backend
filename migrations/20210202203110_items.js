const { schema } = require("../data/config");

exports.up = async function(knex) {
  await knex.schema.createTable('items', table => {
	table.increments();
	table.text('name')
	.notNullable();
	table.text('description')
	.notNullable();
	table.text('price')
	.notNullable();
	table.text('location')
	.notNullable();
   });

};

exports.down = async function(knex) {
    await knex.schema
	.dropTableIfExists("items");
};
