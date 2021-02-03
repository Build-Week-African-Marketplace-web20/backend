const db = require("../data/config")

function find() {
    return db("items")
}

function findById(id) {
    return db("items")
        .where("id", id)
        .first
}
async function add(name) {
	const [id] = await db("items").insert(name)
	return findById(id)
}
module.exports= {
    add,
    find,
    findById
}