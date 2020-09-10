
exports.seed = async function(knex) {
 await knex("blobs").truncate()
 await knex("blobs").insert([
   {name: "Blob Bob"},
   {name: "Aunty Blob"},
   {name: "Blob Ross"},
   {name: "Professor Blob"},
   {name: "Blob Marley"},

 ])
};
