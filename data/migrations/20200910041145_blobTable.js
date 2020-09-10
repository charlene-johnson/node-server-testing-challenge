
exports.up = async function(knex) {
  await knex.schema.createTable("blobs", (table) => {
      table.increments()
      table.text("name").notNullable()
      table.blob("picture")
  })
}

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("blobs")
}
