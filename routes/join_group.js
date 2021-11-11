const { loadCollection } = require("../db/db");
const { createUser } = require("../db/db.user");

const joinGroup = async (ctx) => {
  ctx.reply(
    `Select this https://t.me/joinchat/proE5Z-XWYA3NThk to join groupchat`
  );
  await loadCollection("users", function (users) {
    console.log("Link sent to", ctx.from);
    // Load user into memory but do not persist until user joins group
    users.insert(createUser(ctx.from));
    console.log("loaded in memory", users.find({}));
  });

  // console.log(ctx.from);
};

module.exports = joinGroup;
