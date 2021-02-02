const db = require("../data/config")

async function add(user) {
	const [id] = await db("users").insert(user)
	return findById(id)
}

function find() {
	return db("users").select("id", "username")
}

function findBy(filter) {
	return db("users")
		.select("id", "username", "password")
		.where(filter)
}

function findById(id) {
	return db("users")
		.select("id", "username")
		.where({ id })
		.first()
}
function remove(id) {
	return db("users")
		.where({ id })
		.del()
}
async function update(id, changes) {
	await db("users")
		.where({ id })
		.update(changes)

	return findById(id)
}

module.exports = {
	add,
	find,
	findBy,
	findById,
	remove,
	update,
}
