
exports.seed = async function(knex) {
 await knex("blobs").truncate()
 await knex("blobs").insert([
   {name: "Blobby", picture:"https://i.imgur.com/zyaeNGg.png"},
   {name: "Aunty Blob", picture:"https://i.imgur.com/6278CvN.png"},
   {name: "Blob Ross", picture:"https://i.imgur.com/oq91Dj8.png"},
   {name: "Professor Blob", picture:"https://i.imgur.com/bu1hF0j.png"},
   {name: "Blob Marley", picture:"https://i.imgur.com/ua4qQeK.png"},

 ])
};
