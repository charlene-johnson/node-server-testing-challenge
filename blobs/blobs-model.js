const db = require("../data/config")

function find() {
    return db("blobs")
}

function findById(id) {
    return db("blobs")
    .where({id})
    .first()
}

async function create(blob) {
    const [id] = await db("blobs").insert(blob)
    return findById(id)
}

async function update(id, blob) {
    await db("blobs")
    .where({id})
    .update(blob)
    return findById(id)
}

function remove(id) {
    return db("blobs")
    .where({id})
    .del()
}

module.exports = {
    find,
    findById,
    create,
    update,
    remove,
}