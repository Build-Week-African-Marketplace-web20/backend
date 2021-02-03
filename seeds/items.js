
exports.seed = async function(knex) {
  await knex("items").insert([
    { id: 1, name: "beans", description:"Fresh black raw beans",price:"5$ per pound",location:"NC"},
    { id: 2, name: "oranges", description:"sweet big oranges ",price:"10$ per pound",location:"SC"}, 
    { id: 3, name: "apples", description:"freshly picked up appls ",price:"9$ per pound",location:"AR"},
    { id: 4, name: "grapes", description:"sweet green seedless grapes",price:"8$ per pound",location:"CA"},
    { id: 5, name: "flower seeds", description:"The best in the area ",price:"6$ per pound",location:"MI"},
    { id: 6, name: "Lemons", description:"Big and juicy lemons ",price:"3$ per pound",location:"MN"},
    { id: 7, name: "watermelon", description:"sweet and onpoint ",price:"9$ per pound",location:"HI"},


  ])
}
