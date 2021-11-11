const { loadCollection } = require("../db/db");
const count = (ctx) => {
  loadCollection("users", (users) => {
    ctx.reply(`${users.find({}).length} people registered through me`);
  });
};

module.exports = count;
