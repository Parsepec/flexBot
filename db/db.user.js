var { db, loadCollection } = require("./db");

function createUser(user) {
  const username = user.username ? user.username : "unavailable";
  return {
    id: user.id,
    name: user.first_name,
    username: username,
  };
}
module.exports = { createUser };
