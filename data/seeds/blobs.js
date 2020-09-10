
exports.seed = async function(knex) {
 await knex("blobs").truncate()
 await knex("blobs").insert([
   {name: "Blobby", picture:"https://imgur.com/zyaeNGg"},
   {name: "Aunty Blob", picture:"https://imgur.com/6278CvN"},
   {name: "Blob Ross", picture:"https://imgur.com/oq91Dj8"},
   {name: "Professor Blob", picture:"https://imgur.com/bu1hF0j"},
   {name: "Blob Marley", picture:"https://imgur.com/ua4qQeK"},

 ])
};
