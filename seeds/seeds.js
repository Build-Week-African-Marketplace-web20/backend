exports.seed = async function(knex) {
	await knex("users").insert([
		{ id: 1, username: "janedoe", password: 123456 },
		{ id: 2, username: "johndoe", password: 654321},
	])
}
